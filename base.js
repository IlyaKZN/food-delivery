const globalRestrictions = [
  {
    selector:
      'CallExpression > MemberExpression[object.name="Vue"][property.name="extend"]',
    message: 'Use `defineComponent` instead of `Vue.extend`',
  },
];

module.exports = {
  settings: {
    jsdoc: {
      mode: 'typescript',
    },
    'prettier-vue': {
      SFCBlocks: {
        template: false,
        script: false,
      },
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    DEVELOPMENT: true,
    PRODUCTION: true,
    APP_VERSION: true,
    PROXY: true,
  },
  rules: {
    'no-param-reassign': 'off',
    'arrow-body-style': 'off',
    'no-debugger': 'warn',
    'no-console': ['warn', {
      allow: [
        'warn',
        'error',
      ],
    }],
    'semi': 'error',
    'key-spacing': 'error',
    'comma-spacing': 'error',
    'space-infix-ops': 'error',
    'space-in-parens': 'error',
    'no-multi-spaces': 'error',
    'func-call-spacing': 'error',
    'no-trailing-spaces': 'error',
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'keyword-spacing': ['error', { 'before': true }],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-restricted-syntax': [
      'error',
      ...globalRestrictions,
    ],
    // Vue Plugin ------------------------------------------------------------------------------------------------------
    'vue/no-v-html': 'off',
    'vue/block-tag-newline': 'warn',
    'vue/mustache-interpolation-spacing': 'warn',
    'vue/no-potential-component-option-typo': 'warn',
    'vue/singleline-html-element-content-newline': 'warn',
    'vue/multiline-html-element-content-newline': 'warn',
    'vue/padding-line-between-tags': ['warn', [{ 'blankLine': 'always', 'prev': 'div', 'next': '*' }]],
    'vue/html-end-tags': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/keyword-spacing': 'error',
    'vue/html-self-closing': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/html-quotes': ['error', 'double'],
    'vue/max-len': ['error', { 'code': 180 }],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/first-attribute-linebreak': ['error', {
      'singleline': 'ignore',
      'multiline': 'below'
    }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 1
      },
      'multiline': {
        'max': 1
      }
    }],
    'vue/order-in-components': ['error', {
      order: [
        'name',
        ['props', 'propsData'],
        'emits',
        'components',
        'mixins',
        'ROUTER_GUARDS',
        'LIFECYCLE_HOOKS',
        'methods',
        'computed',
        'data',
        'filters',
        'watch',
      ],
    }],
    'vue/attributes-order': ['error', {
      order: [
        'OTHER_DIRECTIVES',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'TWO_WAY_BINDING',
        'DEFINITION',
        'ATTR_SHORTHAND_BOOL',
        'ATTR_STATIC',
        'ATTR_DYNAMIC',
        'UNIQUE',
        'SLOT',
        'CONTENT',
        'EVENTS',
        'GLOBAL',
      ],
    }],
    'vue/attribute-hyphenation': ['error', 'never', {
      ignore: [],
    }],
    'vue/html-indent': ['error', 2, {
      attribute: 0,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'never',
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 0,
      ignores: [],
    }],
    // Import Plugin  --------------------------------------------------------------------------------------------------
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'import/extensions': 'off',
    'import/first': 'off',
    // Jsdoc Plugin ----------------------------------------------------------------------------------------------------
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-property': 'off',
    'jsdoc/require-property-description': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-description': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/check-tag-names': ['warn', { definedTags: ['satisfies'] }],
    'jsdoc/tag-lines': ['warn', 'any', { startLines: 1 }],
    // Prettier Plugin -------------------------------------------------------------------------------------------------
    'prettier-vue/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.js', '*.ts'],
      rules: {
        'prettier-vue/prettier': 'off',
        'max-len': ['error', { 'code': 180 }],
        'indent': ['error', 2],
      },
    },
    {
      files: ['src/stores/**', 'src/adapters/**'],
      rules: {
        'camelcase': 'off',
      },
    },
    {
      files: 'src/components/**',
      rules: {
        'no-restricted-syntax': [
          'error',
          ...globalRestrictions,
          {
            selector: 'MemberExpression[property.name="$router"]',
            message: 'Do not access `$router` in `components` directory',
          },
          {
            selector: 'MemberExpression[property.name="$route"]',
            message: 'Do not access `$route` in `components` directory',
          },
          {
            selector: 'ObjectExpression Literal[value=/\u005C$route.*/]',
            message: 'Do not access `$route` in `components` directory',
          },
        ],
        'vue/no-restricted-syntax': [
          'error',
          {
            selector: 'Identifier[name="$router"]',
            message: 'Do not access `$router` in `components` directory',
          },
          {
            selector: 'Identifier[name="$route"]',
            message: 'Do not access `$route` in `components` directory',
          },
        ],
      },
    },
  ],
};
