/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  ignoreFiles: ['dist/**', 'node_modules/**'],
  rules: {
    'selector-class-pattern': [
      '^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z][a-z0-9]*(-[a-z0-9]+)*)?(--[a-z][a-z0-9]*(-[a-z0-9]+)*)?$',
      {
        message:
          'Expected class name to match BEM (block, block__element, block--modifier)'
      }
    ]
  },
  overrides: [
    {
      files: ['src/index.scss'],
      rules: {
        'declaration-block-no-shorthand-property-overrides': null
      }
    }
  ]
};
