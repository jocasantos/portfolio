import { Card, CardBody, Heading, Image, Text, VStack } from "@chakra-ui/react";
import DoubleButton from "./DoubleButton";

interface Props {
  text: string;
  text2: string;
  img: string;
}

const ProjectCard = ({ text, text2, img }: Props) => {
  return (
    <Card
      bg="white"
      variant="outline"
      borderColor="black"
      w={300}
      h={370}
      borderRadius={26}
      align="center"
    >
      <CardBody>
        <Image
          ml={1}
          objectFit="cover"
          borderRadius={10}
          src={img}
          alt="project 1 image"
          w={220}
          h={200}
        ></Image>
        <VStack>
          <Heading mt={3} size="md" color="black">
            {text}
          </Heading>
          <Text mb={2} color="RGBA(0, 0, 0, 0.36)">
            {text2}
          </Text>
          <DoubleButton
            text="GitHub"
            text2="Live Demo"
            height="40px"
            height2="41px"
          />
        </VStack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
