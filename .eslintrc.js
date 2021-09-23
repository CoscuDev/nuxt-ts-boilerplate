module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'import/order': 'off',
    'vue/no-v-html': 'off',
    'vue/no-unused-components': 'off',
    // 'no-unused-components': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 1 : 0,
    'nuxt/no-env-in-hooks': 'off',
    'no-undef': 'off',
    'prefer-const': 0,
    'no-console': 0,
    'standard/computed-property-even-spacing': 'off',
    'object-shorthand': 'off',
  },
}
