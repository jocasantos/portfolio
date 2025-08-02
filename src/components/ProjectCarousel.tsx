import { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

interface Project {
  img: string;
  text: string;
  text2: string;
  link: string;
  link2: string;
  imgStyle?: any;
}

interface ProjectCarouselProps {
  title: string;
  projects: Project[];
}

const ProjectCarousel = ({ title, projects }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Responsive values
  const cardSpacing = useBreakpointValue({ base: 280, md: 320 });
  const sideScale = useBreakpointValue({ base: 0.9, md: 0.8 });
  const arrowPosition = useBreakpointValue({ base: -8, md: -12 });
  const containerHeight = useBreakpointValue({ base: "400px", md: "450px" });
  const showSideCards = useBreakpointValue({ base: false, md: true });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const getVisibleProjects = () => {
    const visibleProjects = [];
    const positions = showSideCards ? [-1, 0, 1] : [0]; // Show only center card on mobile
    
    for (const position of positions) {
      let index = currentIndex + position;
      if (index < 0) index = projects.length - 1;
      if (index >= projects.length) index = 0;
      visibleProjects.push({ project: projects[index], position });
    }
    return visibleProjects;
  };

  return (
    <VStack spacing={4} w="100%">
      <Text
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="bold"
        color="black"
        textAlign="center"
      >
        {title}
      </Text>
      
      <Box position="relative" w="100%" maxW={{ base: "100%", md: "800px" }} px={{ base: 4, md: 0 }}>
        <Flex align="center" justify="center" position="relative">
          {/* Left Arrow */}
          <IconButton
            aria-label="Previous project"
            icon={<FaChevronLeft />}
            position="absolute"
            left={arrowPosition}
            zIndex={2}
            bg="white"
            border="1px solid black"
            borderRadius="full"
            size={{ base: "sm", md: "md" }}
            _hover={{
              bg: "black",
              color: "white",
              transform: "scale(1.1)",
            }}
            onClick={prevSlide}
          />

          {/* Carousel Container */}
          <Flex
            align="center"
            justify="center"
            w="100%"
            h={containerHeight}
            overflow="hidden"
            position="relative"
          >
            {getVisibleProjects().map(({ project, position }) => (
              <Box
                key={`${currentIndex}-${position}`}
                position="absolute"
                transform={`translateX(${position * (cardSpacing || 320)}px) scale(${position === 0 ? 1 : (sideScale || 0.8)})`}
                opacity={position === 0 ? 1 : 0.4}
                transition="all 0.3s ease-in-out"
                zIndex={position === 0 ? 1 : 0}
                pointerEvents={position === 0 ? "auto" : "none"}
              >
                <ProjectCard
                  img={project.img}
                  text={project.text}
                  text2={project.text2}
                  link={project.link}
                  link2={project.link2}
                  imgStyle={project.imgStyle}
                />
              </Box>
            ))}
          </Flex>

          {/* Right Arrow */}
          <IconButton
            aria-label="Next project"
            icon={<FaChevronRight />}
            position="absolute"
            right={arrowPosition}
            zIndex={2}
            bg="white"
            border="1px solid black"
            borderRadius="full"
            size={{ base: "sm", md: "md" }}
            _hover={{
              bg: "black",
              color: "white",
              transform: "scale(1.1)",
            }}
            onClick={nextSlide}
          />
        </Flex>

        {/* Dots Indicator */}
        <Flex justify="center" mt={6} gap={2}>
          {projects.map((_, index) => (
            <Box
              key={index}
              w={{ base: 2, md: 3 }}
              h={{ base: 2, md: 3 }}
              borderRadius="full"
              bg={index === currentIndex ? "black" : "gray.300"}
              cursor="pointer"
              transition="all 0.2s"
              _hover={{ transform: "scale(1.2)" }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </Flex>
      </Box>
    </VStack>
  );
};

export default ProjectCarousel;
