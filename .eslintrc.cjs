module.exports = {
  root: true,
  extends: ['next/core-web-vitals'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'react/jsx-props-no-spreading': 'off'
  }
};
