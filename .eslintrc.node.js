{
  "env": {
    "browser": false,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2017,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "legacyDecorators": true
    }
  },
  "root": true,
  "rules": {
    "arrow-body-style": "error",
    "arrow-parens": [
      "warn",
      "as-needed"
    ],
    "block-spacing": "error",
    "brace-style": [
      "error",
      "stroustrup",
      {
        "allowSingleLine": true
      }
    ],
    "camelcase": "error",
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "complexity": "off",
    "constructor-super": "error",
    "curly": [
      "error",
      "multi-line"
    ],
    "eol-last": "error",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "func-call-spacing": [
      "error",
      "never"
    ],
    "guard-for-in": "error",
    "id-blacklist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined"
    ],
    "id-match": "error",
    "import/no-extraneous-dependencies": "off",
    "import/no-internal-modules": "off",
    "indent": "off",
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true,
        "mode": "strict"
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "max-classes-per-file": [
      "error",
      1
    ],
    "max-depth": [
      "warn",
      6
    ],
    "max-len": "off",
    "new-parens": "error",
    "no-bitwise": "off",
    "no-caller": "error",
    "no-cond-assign": "warn",
    "no-console": "warn",
    "no-debugger": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true
      }
    ],
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-fallthrough": "off",
    "no-invalid-this": "off",
    "no-lonely-if": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": [
      "error",
      { "max": 1 }
    ],
    "no-nested-ternary": "off",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-redeclare": "error",
    "no-return-await": "error",
    "no-sequences": "error",
    "no-shadow": [
      "off",
      {
        "hoist": "all"
      }
    ],
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "off",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "off",
    "no-unneeded-ternary": "off",
    "no-unsafe-finally": "error",
    "no-unused-labels": "error",
    "no-unused-vars": "off",
    "no-useless-escape": "warn",
    "no-var": "error",
    "no-void": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": [
      "error",
      "beside"
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "object-shorthand": "error",
    "one-var": [
      "error",
      "never"
    ],
    "padding-line-between-statements": [
      "off",
      {
        "blankLine": "always",
        "prev": "*",
        "next": "return"
      }
    ],
    "prefer-const": "error",
    "prefer-object-spread": "error",
    "radix": "error",
    "semi": [
      "error",
      "always"
    ],
    "space-before-blocks": [
      "error",
      "always"
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": [
      "error",
      "always",
      {
        "markers": [
          "/"
        ]
      }
    ],
    "quote-props": [
      "error",
      "consistent"
    ],
    "quotes": "off",
    "use-isnan": "error",
    "valid-typeof": "off"
  }
}