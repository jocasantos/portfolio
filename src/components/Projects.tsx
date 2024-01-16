import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Stack bg="white" h="100%" align={"center"} direction={"column"}>
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
          text="Local Team's Website"
          text2="HTML, CSS, JavaScript"
        />
      </Flex>
    </Stack>
  );
};

export default Projects;
