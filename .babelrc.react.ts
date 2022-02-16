{
  "env": {
    "development": {
      "plugins": [
        "babel-plugin-styled-components",
      ]
    }
  },
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": "last 2 versions"
        }
      }
    ],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties"],
    ["babel-plugin-styled-components", { "displayName": false }]
  ]
}
