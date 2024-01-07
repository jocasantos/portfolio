import { Flex, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Grid
        templateAreas={`"home" "about" "projects" "contacts"`}
        gridTemplateRows={"1fr"}
        h="100vh"
      >
        <GridItem area="home" bg="white">
          <Home />
        </GridItem>
        <GridItem area="about" bg="white"></GridItem>
        <GridItem area="projects" bg="white"></GridItem>
        <GridItem area="contacts" bg="white"></GridItem>
      </Grid>
    </>
  );
}

export default App;
