module.exports = {
  meta: {
    type: "problem",
  },
  create: function rule(context) {
    return {
      ImportDeclaration(node) {
        const isMuiStyles =
          node.source.value.includes("@mui/") &&
          node.specifiers.find(({ local }) => {
            return local.type === "Identifier" && local.name === "makeStyles";
          });

        if (isMuiStyles) {
          context.report(node, `Not a tss-react makeStyles function`);
        }
      },
    };
  },
};
