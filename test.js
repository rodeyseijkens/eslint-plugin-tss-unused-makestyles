const eslint = require("eslint");
const rule = require("./rule");

const ruleTester = new eslint.RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
});
ruleTester.run("warn-unused-makestyles", rule, {
  valid: [
    `import { makeStyles } from 'tss-react/mui';

    const useStyles = makeStyles()(() => ({
      testClass: {
        backgroundColor: 'red'
      }
    }))
    
    const Component = () => {
      const { classes } = useStyles()
      return <div className={classes.testClass}>test</div>
    }`,
    `import { Box } from '@mui/material';
    
    const Component = () => {
      return <Box>test</Box>
    }`,
  ],
  invalid: [
    {
      code: `import { makeStyles } from '@mui/styles';

      const useStyles = makeStyles({
        testClass: {
          backgroundColor: 'red'
        }
      })
      
      const Component = () => {
        const { classes } = useStyles()
        return <div className={classes.testClass}>test</div>
      }`,
      errors: [
        {
          message: "Not a tss-react makeStyles function",
        },
      ],
    },
    {
      code: `import { makeStyles } from '@mui/material';

      const useStyles = makeStyles({
        testClass: {
          backgroundColor: 'red'
        }
      })
      
      const Component = () => {
        const { classes } = useStyles()
        return <div className={classes.testClass}>test</div>
      }`,
      errors: [
        {
          message: "Not a tss-react makeStyles function",
        },
      ],
    },
    {
      code: `import { Box, makeStyles } from '@mui/material';

      const useStyles = makeStyles({
        testClass: {
          backgroundColor: 'red'
        }
      })
      
      const Component = () => {
        const { classes } = useStyles()
        return <Box className={classes.testClass}>test</Box>
      }`,
      errors: [
        {
          message: "Not a tss-react makeStyles function",
        },
      ],
    },
    {
      code: `import { Box } from '@mui/material';
      import { makeStyles } from '@mui/styles';

      const useStyles = makeStyles({
        testClass: {
          backgroundColor: 'red'
        }
      })
      
      const Component = () => {
        const { classes } = useStyles()
        return <Box className={classes.testClass}>test</Box>
      }`,
      errors: [
        {
          message: "Not a tss-react makeStyles function",
        },
      ],
    },
  ],
});
