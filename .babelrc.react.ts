{
  "env": {
    "development": {
      "plugins": [
        "babel-plugin-styled-components",
        "react-hot-loader/babel"
      ]
    }
  },
  "retainLines": true,
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": [
            "last 2 versions",
            "ie >= 11"
          ]
        }
      }
    ],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    ["babel-plugin-styled-components", { "displayName": false }]
  ]
}
