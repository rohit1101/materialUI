import {
  Button,
  Card,
  CardHeader,
  createMuiTheme,
  Divider,
  Grid,
  IconButton,
  Link,
  makeStyles,
  Paper,
  ThemeProvider,
  Typography,
} from "@material-ui/core"

import { Search } from "@material-ui/icons"
import React from "react"

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
  },
  title:{
    fontSize:'2rem'
  }
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
      <Paper className={classes.root} square>
        <Grid container>
          <Grid item xs={1} />
          <Grid
            item
            container
            xs={10}
            justify="space-between"
            alignItems="center"
            direction="column"
          >
            <Grid
              item
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Button>Subscribe</Button>
              </Grid>
              <Grid item>
                <Typography>Blog</Typography>
              </Grid>
              <Grid item>
                <IconButton>
                  <Search />
                </IconButton>
                <Button variant="outlined">Sign Up</Button>
              </Grid>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item container justify="space-between">
              <Grid item>
                <Typography>
                  <Link href="#title">Technology</Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Link href="#title">Design</Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Link href="#title">Culture</Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Link href="#title">Business</Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Link href="#title">Politics</Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Link href="#title">Opinion</Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Link href="#title">Science</Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Link href="#title">Health</Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Link href="#title">Style</Link>
                </Typography>
              </Grid>{" "}
              <Grid item>
                <Typography>
                  <Link href="#title">Travel</Link>
                </Typography>
              </Grid>{" "}
            </Grid>
            <Grid item style={{width:'inherit'}}>
              <Card >
                
                  <Typography variant='h4'>Title of the featured blog</Typography>
                
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Paper>
    </ThemeProvider>
  )
}

export default App
