import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={`"nav" "main" `}
      gridTemplateRows={"100px 1fr"}
      h="100vh"
    >
      <GridItem area="nav" bgColor="black">
        <Navbar />
      </GridItem>
      <GridItem area={"main"} bgColor="white"></GridItem>
    </Grid>
  );
}

export default App;
