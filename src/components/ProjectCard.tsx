import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

interface Props {
  text: string;
  text2: string;
  img: string;
  link: string;
  link2: string;
  imgStyle?: React.CSSProperties;
}

const ProjectCard = ({ text, text2, img, link, link2, imgStyle }: Props) => {
  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(link2, "_blank");
  };
  return (
    <Card
      as={Link}
      href={link}
      isExternal
      bg="white"
      variant="outline"
      borderColor="black"
      w={300}
      minHeight={370}
      maxHeight={420}
      borderRadius={26}
      align="center"
      _hover={{ textDecoration: "none" }}
    >
      <CardBody>
        <VStack>
          <Image
            ml={1}
            objectFit={imgStyle?.objectFit || "cover"} // Use imgStyle prop or default to "cover"
            borderRadius={10}
            src={img}
            alt="project 1 image"
            w={220}
            h={200}
          ></Image>

          <Heading mt={3} size="md" color="black">
            {text}
          </Heading>
          <Text mb={2} color="RGBA(0, 0, 0, 0.36)" textAlign={"center"}>
            {text2}
          </Text>
          <HStack spacing={4}>
            <Button
              onClick={handleButtonClick}
              leftIcon={<FaGithub size="20px" />}
              bg="white"
              fontSize="md"
              px="21px"
              height="40px"
              color="black"
              borderColor="black"
              border="1px"
              borderRadius="30px"
              _hover={{
                bg: "black",
                color: "white",
                transition: "0.2s",
                transform: "scale(0.98)",
                textDecoration: "none",
              }}
            >
              GitHub
            </Button>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
