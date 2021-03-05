import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
} from "@material-ui/core";

export default function App() {
  return (
    <>
      <Container>
        <AppBar color="default">
          <Toolbar>
            <IconButton></IconButton>
            <Button color="primary">Subscribe</Button>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}
