import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import SladWebsite from "../assets/slad_project_img.jpeg";
import GamesHub from "../assets/games-hub.jpeg";

const Projects = () => {
  return (
    <Stack
      id="Projects"
      bg="white"
      h="100%"
      align={"center"}
      direction={"column"}
    >
      <Text
        fontWeight="500"
        letterSpacing={-1}
        fontSize={"medium"}
        color={"RGBA(0, 0, 0, 0.36)"}
      >
        Browse My Recent
      </Text>
      <Text
        mt={-2}
        letterSpacing={1}
        fontSize={"xx-large"}
        as={"b"}
        color={"black"}
      >
        Projects
      </Text>
      <Box mt={4} />
      <Flex>
        <ProjectCard
          img={GamesHub}
          text="Video Games Library"
          text2="React, TypeScript, Chakra UI"
          link="https://game-grove.vercel.app/"
          link2="https://github.com/jocasantos/game-hub"
        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard
          img={SladWebsite}
          text="Local Team's Website"
          text2="HTML, CSS, JavaScript"
          link="https://jocasantos.github.io/SLAD"
          link2="https://github.com/jocasantos/SLAD"
        />
      </Flex>
    </Stack>
  );
};

export default Projects;
