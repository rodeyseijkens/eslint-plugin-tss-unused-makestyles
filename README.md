# Detect unused tss-react makestyles

This eslint plugin lets you detect unused [tss-react](https://tss-react.dev) makestyles:

# Usage

1. Add the dependency:

```sh
yarn add --dev eslint-plugin-tss-unused-makestyles
```

2. Enable it in you ESLint config

**Case 1**: You are in a [`create-react-app`](https://create-react-app.dev/) project:  
Edit your `package.json`:

```jsonc
{
  //...
  "eslintConfig": {
    "plugins": [
      //...
      "tss-unused-makestyles"
    ],
    "rules": {
      "tss-unused-makestyles/unused-makestyles": "warn"
    }
  }
  //...
}
```

[Example projet](https://github.com/InseeFrLab/onyxia-web)

**Case 2**: You have installed ESLint manually:  
Edit your `.eslintrc.js` file:

```js
module.exports = {
  // ...
  plugins: [
    // ...
    "tss-unused-makestyles",
  ],
  rules: {
    // ...
    "tss-unused-makestyles/unused-makestyles": "warn",
  },
};
```

## Disabling warnings

In case of false positive, disabling the warning:

- For a line: `// eslint-disable-next-line tss-unused-makestyles/unused-makestyles`
- For the entire file: `// eslint-disable-next-line tss-unused-makestyles/unused-makestyles`
