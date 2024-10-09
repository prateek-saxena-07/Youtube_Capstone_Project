import Header from '../components/Header';
import { Box, Grid, Text, Image, Flex, Button } from "@chakra-ui/react";
import { faThumbsUp,faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Comments from '../components/Comments';

const VideoPageLayout = () => {
  const videos = useSelector((state) => state.homeVideosGrid.videoData);
  const params = useParams();
  console.log("videoplayer",videos);
  const video = videos.filter(vid => vid._id === params.id);

  useEffect(() => {
  
    const fetchComments = async () => {
      const response = await fetch(`http://localhost:5100/api/v1/comments/${params.id}`);
      const data = await response.json();
      console.log(data);
    }
    fetchComments();

})

  
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
              src={video[0].videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
        </Box>
        
          {/* Video Description */}
          <Box gridArea="description">
            <Text fontSize="2xl" fontWeight="bold">
              {video[0].title}
          </Text>
          <Button><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon></Button><Button><FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon></Button>
            <Text fontSize="lg" color="gray.500">
              {"Published by:"}
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
          <Comments videoId={params.id} />
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
