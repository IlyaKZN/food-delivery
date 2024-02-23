module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:jsdoc/recommended',
    'plugin:prettier-vue/recommended',
    'plugin:@typescript-eslint/recommended',
    require.resolve("./base.js"),
  ],
  plugins: [
    'vue',
    'import',
    'promise',
    'jsdoc',
    'prettier-vue',
    '@typescript-eslint',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      js: '@babel/eslint-parser',
      ts: '@typescript-eslint/parser',
    },
    ecmaVersion: 12,
  },
  rules: {
    'no-undef': 0,
    'promise/always-return': 0,

    'max-len': [2, {
      code: 180,
      ignoreStrings: true,
      ignoreUrls: true,
      ignorePattern: '\\$.*gettext',
    }],
    'vue/max-len': [2, {
      code: 180,
      ignoreUrls: true,
      ignoreStrings: true,
      ignorePattern: '\\$.*gettext',
    }],
    'vue/attributes-order': [2, {
      order: [
        'LIST_RENDERING', // 'v-for item in items'
        'CONDITIONALS', // 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
        'RENDER_MODIFIERS', // 'v-once', 'v-pre'
        'DEFINITION', //  'is', 'v-is'
        'SLOT', // 'v-slot'
        'OTHER_DIRECTIVES', // 'v-custom-directive'
        'TWO_WAY_BINDING', // 'v-model'
        'EVENTS', // '@click="functionCall"', 'v-on="event"'
        'OTHER_ATTR', // 'custom-prop="foo"', 'v-bind:prop="foo"', ':prop="foo"'
        'CONTENT', // 'v-text', 'v-html'
        'UNIQUE', // 'ref', 'key'
        'GLOBAL', //  'id'
      ],
      alphabetical: true,
    }],
    'vue/order-in-components': [2, {
      order: [
        'name',
        'components',
        'mixins',
        'props',
        'emits',
        'ROUTER_GUARDS',
        'LIFECYCLE_HOOKS',
        'methods',
        'computed',
        'data',
        'filters',
        'watch',
        'setup',
      ],
    }],
  },
};
