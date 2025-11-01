module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'color-no-invalid-hex': true,
    'selector-class-pattern': [
      '^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$|^[A-Z][a-zA-Z0-9]+$',
      {
        message: 'Use either kebab-case or PascalCase for component classes.'
      }
    ]
  }
};
