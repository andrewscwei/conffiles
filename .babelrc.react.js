{
  "env": {
    "development": {
      "plugins": [
        "babel-plugin-styled-components"
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
            "last 2 versions"
          ]
        }
      }
    ],
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-optional-chaining",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties"],
    ["babel-plugin-styled-components", { "displayName": false }]
  ]
}
