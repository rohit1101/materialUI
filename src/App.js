import {
  AppBar,
  Box,
  Button,
  Container,
  createMuiTheme,
  Divider,
  IconButton,
  Paper,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

const whiteTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#e3f2fd",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={whiteTheme}>
      <Paper style={{ backgroundColor: "black" }} square={true}>
        <Container maxWidth="lg">
          <Paper
            style={{ height: "100vh", backgroundColor: "black" }}
            square={true}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding={1}
            >
              <Button
                size="small"
                color="primary"
                variant="outlined"
                style={{ fontWeight: "600" }}
              >
                Subscribe
              </Button>
              <Typography variant="h5" color="primary">
                Blog
              </Typography>
              <Box>
                <IconButton color="primary">
                  <SearchOutlined />
                </IconButton>
                <Button size="small" color="primary" variant="outlined">
                  Sign Up
                </Button>
              </Box>
            </Box>
            <Divider style={{ backgroundColor: "#2E2E30" }} />
          </Paper>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}
