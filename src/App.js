import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  Typography,
} from "@material-ui/core"
import React from "react"
import DenseAppBar from "./AppBar"

const useStyles = makeStyles({
  root: {
    width: "100%",
    background: "black",
  },
})

function App() {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  })

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div>
        <DenseAppBar />
      </div>
    </ThemeProvider>
  )
}

export default App
