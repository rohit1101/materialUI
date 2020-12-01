import {
  Container,
  createMuiTheme,
  makeStyles,
  Paper,
  ThemeProvider,
  Typography,
} from "@material-ui/core"
import React from "react"

const useStyles = makeStyles({})

function App() {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  })

  const classes = useStyles({
    root: {
      background: "black",
      overflow: "hidden",
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Typography>Hello</Typography>
      </Paper>
    </ThemeProvider>
  )
}

export default App
