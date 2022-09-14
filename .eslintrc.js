module.exports ={
  root: true,
  env: {
    // allow to work with the browser
    browser: true,
    // manage of javascript intern protocols
    amd: true,
    node: true,
    es6: true,
  },
  // this part are the plugins and internal configurations 
  extends: [
    // default recomendation
    'eslint:recommended',
    // this is for accessibility
    'plugin:jsx-a11y/recommended',
    // prettier
    'plugin:prettier/recommended',
    // default next config
    'next',
    // default configuration in the project
    'next/core-web-vitals',
  ],
  // custom rules
  rules: {
    'semi': ['error', 'always'],
  }
}
