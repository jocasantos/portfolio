import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import SladWebsite from "../assets/slad_project_img.jpeg";
import GamesHub from "../assets/games-hub.jpeg";
import MuscleTracker from "../assets/MuscleTracker.jpeg";
import DevOps from "../assets/DevOps.png";
import ConfigurationManagement from "../assets/ConfigurationManagement.png";
import ScriptShell from "../assets/ScriptShell.png";

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
          img={ConfigurationManagement}
          text="DevOps #3"
          text2="Ansible, AWS, EC2, SSH, Linux"
          link="https://github.com/jocasantos/how-to-manage-remote-servers-with-ansible"
          link2="https://github.com/jocasantos/how-to-manage-remote-servers-with-ansible"
        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard
          img={DevOps}
          text="DevOps #2"
          text2="AWS, EC2, Security Groups, IAM, SSH, Linux, SHELL"
          link="https://github.com/jocasantos/aws-nodejs-app-demo"
          link2="https://github.com/jocasantos/aws-nodejs-app-demo"
        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard
          img={ScriptShell}
          text="DevOps #1"
          text2="AWS CLI, S3, Linux, SHELL"
          link="https://github.com/jocasantos/CloudUploaderCLI"
          link2="https://github.com/jocasantos/CloudUploaderCLI"
        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard
          img={MuscleTracker}
          text="Muscle Tracker"
          text2="NextJS, TypeScript, MongoDB, shadcn/ui, Tailwind, Clerk, Stripe, Vercel"
          link="https://www.muscletracker.fit/"
          link2="https://github.com/jocasantos/gym-plans"
        />
      </Flex>
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
