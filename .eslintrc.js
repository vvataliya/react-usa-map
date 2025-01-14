module.exports = {
  "parser": "@babel/eslint-parser",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "no-bitwise": 2,
    "no-else-return": 2,
    "no-eq-null": 2,
    "no-extra-parens": 0,
    "no-floating-decimal": 2,
    "no-inner-declarations": [2, "both"],
    "no-lonely-if": 2,
    "no-multiple-empty-lines": [2, { "max": 3 }],
    "no-self-compare": 2,
    "no-underscore-dangle": 0,
    "no-use-before-define": 0,
    "no-unused-expressions": 0,
    "no-void": 2,
    "brace-style": [2, "1tbs"],
    "camelcase": [1, { "properties": "never" }],
    "consistent-return": 0,
    "comma-style": [2, "last"],
    "complexity": [1, 12],
    "func-names": 0,
    "indent": ["error", 2],
    "max-len": [0, 120],
    "new-cap": [2, { "newIsCap": true, "capIsNew": false }],
    "quotes": [2, "double"],
    "keyword-spacing": [2, { "before": true, "after": true }],
    "space-before-blocks": [2, "always"],
    "array-bracket-spacing": [2, "never"],
    "space-in-parens": [2, "never"],
    "strict": [0],
    "valid-jsdoc": 2,
    "wrap-iife": [2, "any"],
    "yoda": [1, "never"]
  },
  "plugins": [
    "react"
  ],
  "globals": {

  }
}
