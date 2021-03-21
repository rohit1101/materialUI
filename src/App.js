import {
  Button,
  Card,
  createMuiTheme,
  Divider,
  Grid,
  IconButton,
  Link,
  makeStyles,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import * as Yup from "yup";
import { Search } from "@material-ui/icons";
import { useFormik } from "formik";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
  },
  title: {
    fontSize: "2rem",
  },
});

function App() {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: blue[500],
      },
    },
  });

  const classes = useStyles();

  // function validate(values) {
  //   let errors = {};
  //   if (!values.firstName) {
  //     errors.firstName = "Required";
  //   }
  //   if (!values.lastName) {
  //     errors.lastName = "Required";
  //   }
  //   if (!values.email) {
  //     errors.email = "Required";
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //   ) {
  //     errors.email = "Enter a valid Email Address";
  //   }
  //   return errors;
  // }

  const subscribeFormData = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      jobType: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(5, "must be 5 or less characters")
        .required("Required"),
      lastName: Yup.string()
        .max(2, "must be 2 or less characters")
        .required("Required"),
      email: Yup.string()
        .email("Must be a valid email address")
        .required("Required"),
    }),
    // validate,
  });
  const {
    values,
    handleChange,
    handleReset,
    handleBlur,
    errors,
  } = subscribeFormData;
  console.log(subscribeFormData);

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
                  <Link color="primary" href="#title">
                    Technology
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Link color="primary" href="#title">
                    Design
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Link color="primary" href="#title">
                    Culture
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Link color="primary" href="#title">
                    Business
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Link color="primary" href="#title">
                    Politics
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Link color="primary" href="#title">
                    Opinion
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Link color="primary" href="#title">
                    Science
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Link color="primary" href="#title">
                    Health
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Link color="primary" href="#title">
                    Style
                  </Link>
                </Typography>
              </Grid>{" "}
              <Grid item>
                <Typography>
                  <Link color="primary" href="#title">
                    Travel
                  </Link>
                </Typography>
              </Grid>{" "}
            </Grid>
            <Grid item style={{ width: "inherit" }}>
              <Card>
                <Typography variant="h4">Title of the featured blog</Typography>
              </Card>
              <Typography variant="h3" gutterBottom={true}>
                Subscribe!
              </Typography>
              <Grid container item direction="column" spacing={2}>
                <Grid item>
                  <TextField
                    variant="outlined"
                    label="First Name"
                    name="firstName"
                    helperText={
                      Boolean(errors.firstName) ? errors.firstName : null
                    }
                    error={Boolean(errors.firstName)}
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    label="Last Name"
                    name="lastName"
                    helperText={
                      Boolean(errors.lastName) ? errors.lastName : null
                    }
                    error={Boolean(errors.lastName)}
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    label="Email Address"
                    name="email"
                    helperText={Boolean(errors.email) ? errors.email : null}
                    error={Boolean(errors.email)}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    label="Job Type"
                    name="jobType"
                  />
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" type="submit">
                    Submit
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
