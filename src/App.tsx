import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { Box } from "@chakra-ui/react";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Box bg="white" pt={40}></Box>
      <Hero />
      <Box bg="white" pt={40}></Box>
      <About />
      <Box bg="white" pt={40}></Box>
      <Projects />
      <Box bg="white" pt={40}></Box>
    </>
  );
}

export default App;
