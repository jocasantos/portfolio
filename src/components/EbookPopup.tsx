import { useEffect } from 'react';
import {
  Box,
  Button,
  Image,
  Text,
  VStack,
  HStack,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { FaBook } from 'react-icons/fa';
import ebookCover from '../assets/ebook-cover.png';
import { Link as ChakraLink } from '@chakra-ui/react';

const EbookPopup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      onOpen();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onOpen]);

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {/* Floating Ebook Button */}
      <Box
        position="fixed"
        bottom={6}
        right={6}
        zIndex={1000}
        animation="bounce 2s infinite"
      >
        <IconButton
          aria-label="View Ebook"
          icon={<FaBook />}
          size="lg"
          colorScheme="green"
          borderRadius="full"
          onClick={onOpen}
          boxShadow="0 4px 20px rgba(0, 0, 0, 0.3)"
          _hover={{
            transform: "scale(1.1)",
            transition: "0.2s",
          }}
        />
      </Box>

      {/* Modal Popup */}
      <Modal isOpen={isOpen} onClose={handleClose} size="md" isCentered>
        <ModalOverlay bg="blackAlpha.600" />
        <ModalContent
          bg="white"
          borderRadius="20px"
          boxShadow="0 20px 40px rgba(0, 0, 0, 0.3)"
          mx={4}
        >
          <ModalCloseButton />
          <ModalBody p={6}>
            <VStack spacing={4} align="center">
              <Box
                animation="pulse 2s infinite"
                _hover={{ transform: "scale(1.05)" }}
                transition="0.3s"
              >
                <Image
                  src={ebookCover}
                  alt="From Personal Trainer to DevOps Engineer - Ebook"
                  width="200px"
                  borderRadius="10px"
                  boxShadow="0 10px 30px rgba(0, 0, 0, 0.2)"
                />
              </Box>
              
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="black"
                textAlign="center"
                lineHeight="1.2"
              >
                New Ebook Available!
              </Text>
              
              <Text
                fontSize="md"
                color="gray.600"
                textAlign="center"
                px={2}
              >
                My Complete Journey and Roadmap
              </Text>
              
              <HStack spacing={3} pt={2}>
                <Button
                  as={ChakraLink}
                  href="https://ebook.jocasantos.com" // Replace with your actual ebook link
                  isExternal
                  colorScheme="green"
                  size="md"
                  borderRadius="25px"
                  px={6}
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "0.2s",
                    textDecoration: "none",
                  }}
                >
                  Get Ebook
                </Button>
                
                <Button
                  variant="outline"
                  size="md"
                  borderRadius="25px"
                  px={6}
                  onClick={handleClose}
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "0.2s",
                  }}
                >
                  Later
                </Button>
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* CSS Animation Styles */}
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
          
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.02);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </>
  );
};

export default EbookPopup;
