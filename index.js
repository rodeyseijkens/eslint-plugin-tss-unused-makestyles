module.exports = {
  rules: {
    "unused-makestyles": require("./rule"),
  },
  configs: {
    recommended: {
      plugins: ["tss-unused-makestyles"],
      rules: {
        "tss-unused-makestyles/unused-makestyles": "warn",
      },
    },
  },
};
