import { HStack, Button } from "@chakra-ui/react";

interface Props {
  text: string;
  text2: string;
  height?: string;
  height2?: string;
}

const DoubleButton = ({
  text,
  text2,
  height = "53px",
  height2 = "54px",
}: Props) => {
  return (
    <HStack>
      <Button
        fontSize="sm"
        px="21px"
        height={height}
        color="black"
        borderColor="black"
        border="1px"
        borderRadius="30px"
        _hover={{
          bg: "black",
          color: "white",
          transition: "0.2s",
          transform: "scale(0.98)",
        }}
      >
        {text}
      </Button>
      <Button
        ml={1}
        border="1px"
        borderRadius="30px"
        fontSize="sm"
        px="24px"
        height={height2}
        bg="RGBA(0, 0, 0, 0.50)"
        _hover={{
          bg: "black",
          color: "white",
          transition: "0.2s",
          transform: "scale(0.98)",
        }}
      >
        {text2}
      </Button>
    </HStack>
  );
};

export default DoubleButton;
