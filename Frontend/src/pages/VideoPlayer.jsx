import Header from '../components/Header';
import { Box, Grid, Text, Image, Flex } from "@chakra-ui/react";

const VideoPageLayout = () => {
  return (
      <>
          <Header/>
        <Grid
          templateAreas={`
            "video video recommendations"
            "description description recommendations"
            "comments comments recommendations"
          `}
          gridTemplateRows={'auto auto 1fr'}
          gridTemplateColumns={'200px 2fr 1fr'}
          gap={6}
          padding={6}
        >
          {/* Video Player */}
          <Box gridArea="video" bg="gray.200" height="400px">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc?rel=0&amp;controls=0&amp;showinfo=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
          {/* Video Description */}
          <Box gridArea="description">
            <Text fontSize="2xl" fontWeight="bold">
              React JS Roadmap | Chat Over React Series
            </Text>
            <Text fontSize="lg" color="gray.500">
              Published by: Awesome Coder
            </Text>
            <Text mt={2}>
              Video description goes here. It provides detailed information about
              the video, including links, hashtags, and timestamps for sections of
              the video.
            </Text>
          </Box>
          {/* Comments Section */}
          <Box gridArea="comments">
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Comments
            </Text>
            <Box bg="gray.100" p={4} borderRadius="md" mb={4}>
              <Text fontWeight="bold">John Doe</Text>
              <Text>This is an amazing video. I learned so much from it!</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md" mb={4}>
              <Text fontWeight="bold">Jane Smith</Text>
              <Text>Great explanations, very helpful.</Text>
            </Box>
          </Box>
          {/* Right Section: Recommended Videos */}
          <Box gridArea="recommendations">
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Recommended Videos
            </Text>
            {/* Recommended Video Item */}
            <Flex mb={4}>
              <Image
                src="https://via.placeholder.com/120"
                alt="Thumbnail"
                width="120px"
                height="90px"
                borderRadius="md"
              />
              <Box ml={3}>
                <Text fontWeight="bold">React.js Basics</Text>
                <Text fontSize="sm" color="gray.500">
                  Awesome Coder
                </Text>
                <Text fontSize="sm" color="gray.500">
                  100K views · 1 week ago
                </Text>
              </Box>
            </Flex>
            <Flex mb={4}>
              <Image
                src="https://via.placeholder.com/120"
                alt="Thumbnail"
                width="120px"
                height="90px"
                borderRadius="md"
              />
              <Box ml={3}>
                <Text fontWeight="bold">Advanced React Techniques</Text>
                <Text fontSize="sm" color="gray.500">
                  Awesome Coder
                </Text>
                <Text fontSize="sm" color="gray.500">
                  50K views · 2 days ago
                </Text>
              </Box>
                  </Flex>
                  
          </Box>
        </Grid>
    </>
  );
};

export default VideoPageLayout;
