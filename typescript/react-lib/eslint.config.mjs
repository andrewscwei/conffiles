import eslint from '@eslint/js'
import StylisticPlugin from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['**/lib/**'],
  },
  {
    plugins: {
      '@stylistic': StylisticPlugin,
    },
    rules: {
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/array-element-newline': ['error', 'consistent'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
      '@stylistic/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/comma-style': ['error', 'last'],
      '@stylistic/computed-property-spacing': ['error', 'never'],
      '@stylistic/dot-location': ['error', 'property'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/function-paren-newline': ['error', 'multiline'],
      '@stylistic/generator-star-spacing': ['error', { before: true, after: false }],
      '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/indent-binary-ops': ['error', 2],
      '@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],
      '@stylistic/jsx-closing-tag-location': 'error',
      '@stylistic/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never', propElementValues: 'always' }],
      '@stylistic/jsx-curly-newline': ['error', { multiline: 'consistent', singleline: 'consistent' }],
      '@stylistic/jsx-curly-spacing': ['error', { when: 'never' }],
      '@stylistic/jsx-equals-spacing': ['error', 'never'],
      '@stylistic/jsx-first-prop-new-line': ['error', 'multiline'],
      '@stylistic/jsx-function-call-newline': ['error', 'multiline'],
      '@stylistic/jsx-indent': ['error', 2],
      '@stylistic/jsx-indent-props': ['error', 2],
      '@stylistic/jsx-max-props-per-line': ['error', { when: 'multiline', maximum: 1 }],
      '@stylistic/jsx-newline': 'off',
      '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
      '@stylistic/jsx-pascal-case': 'error',
      '@stylistic/jsx-props-no-multi-spaces': 'error',
      '@stylistic/jsx-quotes': ['error', 'prefer-single'],
      '@stylistic/jsx-self-closing-comp': 'error',
      '@stylistic/jsx-sort-props': ['error', { callbacksLast: true, shorthandFirst: true, ignoreCase: true, reservedFirst: true }],
      '@stylistic/jsx-tag-spacing': ['error', { afterOpening: 'never', closingSlash: 'never', beforeSelfClosing: 'never' }],
      '@stylistic/jsx-wrap-multilines': ['error', { declaration: 'parens', assignment: 'parens', return: 'parens', arrow: 'parens', condition: 'ignore', logical: 'ignore', prop: 'ignore', propertyValue: 'ignore' }],
      '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
      '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
      '@stylistic/line-comment-position': 'off',
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/lines-around-comment': 'off',
      '@stylistic/max-len': 'off',
      '@stylistic/max-statements-per-line': ['warn', { max: 1 }],
      '@stylistic/member-delimiter-style': ['error', { multiline: { delimiter: 'none' }, singleline: { delimiter: 'semi', requireLast: false }, multilineDetection: 'brackets' }],
      '@stylistic/multiline-comment-style': 'off',
      '@stylistic/multiline-ternary': 'off',
      '@stylistic/new-parens': ['error', 'always'],
      '@stylistic/newline-per-chained-call': 'off',
      '@stylistic/no-confusing-arrow': 'off',
      '@stylistic/no-extra-parens': ['error', 'functions'],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/no-floating-decimal': 'error',
      '@stylistic/no-mixed-operators': 'off',
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
      '@stylistic/no-tabs': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/nonblock-statement-body-position': ['error', 'beside'],
      '@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      '@stylistic/one-var-declaration-per-line': ['error', 'initializations'],
      '@stylistic/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
      '@stylistic/padded-blocks': ['error', 'never'],
      '@stylistic/padding-line-between-statements': 'off',
      '@stylistic/quote-props': ['error', 'consistent-as-needed'],
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/rest-spread-spacing': ['error', 'never'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/semi-spacing': ['error', { before: false, after: true }],
      '@stylistic/semi-style': ['error', 'last'],
      '@stylistic/space-before-blocks': ['error', 'always'],
      '@stylistic/space-before-function-paren': ['error', { anonymous: 'always', asyncArrow: 'always', named: 'never' }],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/space-unary-ops': ['error', { words: true, nonwords: false }],
      '@stylistic/spaced-comment': ['error', 'always'],
      '@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],
      '@stylistic/template-curly-spacing': ['error', 'never'],
      '@stylistic/template-tag-spacing': ['error', 'never'],
      '@stylistic/type-annotation-spacing': ['error', { before: true, after: true, overrides: { colon: { before: false, after: true } } }],
      '@stylistic/type-generic-spacing': 'error',
      '@stylistic/type-named-tuple-spacing': 'error',
      '@stylistic/wrap-iife': ['error', 'inside'],
      '@stylistic/wrap-regex': 'off',
      '@stylistic/yield-star-spacing': ['error', { before: true, after: false }],
    },
  },
  {
    rules: {
      '@typescript-eslint/array-type': ['error', { default: 'array' }],
      '@typescript-eslint/class-literal-property-style': ['error', 'getters'],
      '@typescript-eslint/consistent-generic-constructors': 'error',
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/dot-notation': 'off',
      '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'init-declarations': 'off',
      '@typescript-eslint/init-declarations': 'off',
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/naming-convention': ['error', {
        format: ['UPPER_CASE'],
        selector: ['enumMember'],
      }, {
        format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allowSingleOrDouble',
        selector: ['variableLike', 'property'],
        trailingUnderscore: 'allowSingleOrDouble',
      }, {
        format: ['camelCase'],
        selector: ['memberLike', 'method'],
      }, {
        format: ['PascalCase'],
        selector: 'typeLike',
      }, {
        format: null,
        modifiers: ['requiresQuotes'],
        selector: ['objectLiteralProperty', 'objectLiteralMethod'],
      }, {
        format: null,
        leadingUnderscore: 'allow',
        modifiers: ['unused'],
        selector: 'parameter',
      }],
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      'no-dupe-class-members': 'off',
      '@typescript-eslint/no-dupe-class-members': 'error',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-invalid-this': 'off',
      '@typescript-eslint/no-invalid-this': 'error',
      '@typescript-eslint/no-invalid-void-type': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
      '@typescript-eslint/no-require-imports': 'warn',
      'no-restricted-imports': 'off',
      '@typescript-eslint/no-restricted-imports': 'error',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-this-alias': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { args: 'none', caughtErrors: 'none' }],
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/no-var-requires': 'warn',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-optional-chain': 'off',
      '@typescript-eslint/sort-type-union-intersection-members': 'off',
      '@typescript-eslint/triple-slash-reference': ['error', { lib: 'always', path: 'always', types: 'prefer-import' }],
      '@typescript-eslint/unified-signatures': 'error',
    },
  },
  {
    rules: {
      'array-callback-return': 'error',
      'arrow-body-style': 'off',
      'capitalized-comments': 'off',
      'complexity': 'off',
      'curly': ['error', 'multi-line'],
      'default-case': 'error',
      'default-case-last': 'error',
      'eqeqeq': ['error', 'smart'],
      'func-names': ['error', 'never'],
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'guard-for-in': 'error',
      'id-denylist': ['error', 'any', 'Number', 'String', 'Boolean', 'Undefined', 'undefined'],
      'id-match': 'error',
      'max-classes-per-file': ['error', 1],
      'max-depth': ['warn', 6],
      'new-cap': 'off',
      'no-alert': 'warn',
      'no-bitwise': 'off',
      'no-caller': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-constant-binary-expression': 'error',
      'no-constructor-return': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-eval': 'error',
      'no-extra-bind': 'error',
      'no-fallthrough': 'off',
      'no-implied-eval': 'error',
      'no-label-var': 'error',
      'no-lonely-if': 'error',
      'no-magic-numbers': 'off',
      'no-multi-assign': 'error',
      'no-nested-ternary': 'off',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-param-reassign': 'error',
      'no-promise-executor-return': 'error',
      'no-redeclare': 'off',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'off',
      'no-undef-init': 'error',
      'no-underscore-dangle': 'off',
      'no-unmodified-loop-condition': 'warn',
      'no-unneeded-ternary': 'off',
      'no-unreachable-loop': 'warn',
      'no-unused-private-class-members': 'warn',
      'no-use-before-define': 'off',
      'no-var': 'error',
      'no-void': 'error',
      'no-warning-comments': ['warn', { location: 'start', terms: ['todo', 'fixme', 'hack'] }],
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'prefer-const': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-rest-params': 'error',
      'prefer-template': 'error',
      'radix': 'error',
      'require-atomic-updates': 'error',
    },
  },
)