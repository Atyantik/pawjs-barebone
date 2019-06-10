const path = require('path');

module.exports = {
  "extends": "./node_modules/@pawjs/pawjs/.eslintrc",
  "rules": {
    "import/no-extraneous-dependencies": false,
    "react/jsx-boolean-value": false
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "parser": "@typescript-eslint/parser",
      "rules": {
        "no-undef": "off",
        "no-unused-vars": "off",
        "react/prop-types": "off"
      }
    }
  ],
};
