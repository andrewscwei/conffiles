#!/bin/bash

if [ -z $FTP_HOST ]; then
  echo "No FTP host provided. Set it via FTP_HOST environment variable."
  exit 0
fi

if [ -z $FTP_USER ] || [ -z $FTP_PASSWD ]; then
  echo "No FTP user/password provided. Set it via FTP_USER/FTP_PASSWD environment variables."
  exit 0
fi

PORT=${FTP_PORT:-21}
BUILD_DIR="$(pwd)/build"
REMOTE_DIR="/"
PUBLIC_DIR=${FTP_PUBLIC_DIR:-/public_html}
TMP_DIR="/.tmp"
BACKUP_DIR="/.backup"
MAX_BACKUPS=${FTP_MAX_BACKUPS:-3}

function init() {
  echo "
set ftp:passive-mode true
set ssl:verify-certificate false
cd $REMOTE_DIR
  "
}

function ensure_dirs() {
  echo "
rmdir -f $TMP_DIR
mkdir -fp $TMP_DIR
mkdir -fp $BACKUP_DIR
mkdir -fp $PUBLIC_DIR
  "
}

function upload_artifacts() {
  echo "mirror -R $BUILD_DIR $TMP_DIR"
}

function backup() {
  n=$[MAX_BACKUPS-1]
  i=$n

  while [[ i -ge 0 ]]; do
    if [[ $i = $n ]]; then
      echo "rm -rf $BACKUP_DIR/revision-$i"
    elif [[ $i = 0 ]]; then
      t=$[i+1]
      echo "mv $BACKUP_DIR/revision-$i-latest $BACKUP_DIR/revision-$t"
    else
      t=$[i+1]
      echo "mv $BACKUP_DIR/revision-$i $BACKUP_DIR/revision-$t"
    fi

    i=$[i-1]
  done

  echo "mv $PUBLIC_DIR $BACKUP_DIR/revision-0-latest"
}

function publish() {
  echo "mv $TMP_DIR $PUBLIC_DIR"
}

function cleanup() {
  echo "rm -rf $TMP_DIR"
}

lftp -u $FTP_USER,$FTP_PASSWD $FTP_HOST << EOF
$(init)
$(ensure_dirs)
$(upload_artifacts)
$(backup)
$(publish)
$(cleanup)
exit
EOF
