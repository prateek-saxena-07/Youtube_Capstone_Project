import Header from '../components/Header';
import { Box, Grid, Text, Image, Flex, Button, VStack, HStack, Divider,ButtonGroup,IconButton } from "@chakra-ui/react";
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { faThumbsUp as faThumbsUpOutline, faThumbsDown as faThumbsDownOutline } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Comments from '../components/Comments';
import { dislike, fetchSuccess, like } from '../utils/videoPlayerSlice';

const VideoPageLayout = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const params = useParams();
  const[profile,setProfile]=useState('')

  useEffect(() => {
    const fetchVideo = async () => {
      const response = await fetch(`http://localhost:5100/api/v1/temp/find/${params.id}`);
      const data = await response.json();
      dispatch(fetchSuccess(data));
    };
    fetchVideo();
  }, [dispatch, params.id]);

  useEffect(() => {
    const updateViews = async () => {
      await fetch(`http://localhost:5100/api/v1/temp/view/${params.id}`, { method: 'PUT' });
    };
    updateViews();
  }, [params.id]);

  const handleLike = async () => {
    await fetch(`http://localhost:5100/api/v1/user/like/${params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    dispatch(like(currentUser._id));
  };

  const handleDislike = async () => {
    await fetch(`http://localhost:5100/api/v1/user/dislike/${params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    dispatch(dislike(currentUser._id));
  };

   useEffect(() => {
    const profile = async () => {
      const response = await fetch(`http://localhost:5100/api/v1/user/${currentVideo.userId}`);
      const data = await response.json()
      console.log(data.profileImg)
      setProfile(data.profileImg);
     };
     

    profile();
  },[currentVideo]);

  if (!currentVideo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Grid
        templateAreas={`"video video recommendations" "description description recommendations" "comments comments recommendations"`}
        gridTemplateRows={'auto auto 1fr'}
        gridTemplateColumns={'3fr 1fr'}
        gap={6}
        padding={6}
      >
        {/* Video Player */}
        <Box gridArea="video" bg="gray.900" height="300px" borderRadius="md">
          <iframe
            width="100%"
            height="100%"
            src={currentVideo.videoUrl}
           
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>

        {/* Video Description Section */}
        <Box gridArea="description" padding="4">
          <VStack align="stretch" spacing={4}>
            {console.log(profile)}
            <img src={profile} alt="profile_image" height={'20px'} width={'20px'} />
            <Text fontSize="2xl" fontWeight="bold">{currentVideo.title}</Text>
            <HStack spacing={4}>
              {currentUser && currentVideo ? (
                <Button onClick={handleLike} leftIcon={
                  currentVideo.likes?.includes(currentUser._id) ? <FontAwesomeIcon icon={faThumbsUp} /> : <FontAwesomeIcon icon={faThumbsUpOutline} />
                }>
                  {currentVideo.likes.length}
                </Button>
              ) : (
                <Button leftIcon={<FontAwesomeIcon icon={faThumbsUpOutline} />}>{currentVideo.likes.length}</Button>
              )}
              {currentUser && currentVideo ? (
                <Button onClick={handleDislike} leftIcon={
                  currentVideo.dislikes?.includes(currentUser._id) ? <FontAwesomeIcon icon={faThumbsDown} /> : <FontAwesomeIcon icon={faThumbsDownOutline} />
                }>
                  {currentVideo.dislikes.length}
                </Button>
              ) : (
                <Button leftIcon={<FontAwesomeIcon icon={faThumbsDownOutline} />}>{currentVideo.dislikes.length}</Button>
              )}
              <Button colorScheme="red" borderRadius="full">
                Subscribe
              </Button>
            </HStack>
            <Divider />
            <Text fontSize="md" color="gray.600">Published by: {currentVideo.channel}</Text>
            <Text mt={2}>{currentVideo.desc}</Text>
          </VStack>
        </Box>

        {/* Comments Section */}
        <Box gridArea="comments" padding="4" bg="black.100" borderRadius="md">
          <Text fontSize="xl" fontWeight="bold" mb={4}>Comments</Text>
          <Comments videoId={params.id} />
        </Box>

        {/* Recommended Videos */}
        <Box gridArea="recommendations" padding="4"  borderRadius="md"  height="full" overflowY="auto">
          <Text fontSize="xl" fontWeight="bold" mb={4}>Recommended Videos</Text>
           <Box pb={4} >
                {/* Filters */}
                <ButtonGroup>
            <Button>
                Latest
            </Button>
            <Button>
                Popular
                    </Button>
                    <Button>
                        Oldest
              </Button>

              <IconButton borderRadius={'50px'} backgroundColor={'transparent'}
          icon={<ChevronRightIcon />} ml={2}
        />
            </ButtonGroup>
              
        </Box>
          <VStack spacing={4} align="stretch">
            <Flex>
              <Image src="https://via.placeholder.com/120" alt="Thumbnail" width="120px" height="90px" borderRadius="md" />
              <Box ml={3}>
                <Text fontWeight="bold">React.js Basics</Text>
                <Text fontSize="sm" color="gray.500">Awesome Coder</Text>
                <Text fontSize="sm" color="gray.500">100K views · 1 week ago</Text>
              </Box>
            </Flex>
            <Flex>
              <Image src="https://via.placeholder.com/120" alt="Thumbnail" width="120px" height="90px" borderRadius="md" />
              <Box ml={3}>
                <Text fontWeight="bold">Advanced React Techniques</Text>
                <Text fontSize="sm" color="gray.500">Awesome Coder</Text>
                <Text fontSize="sm" color="gray.500">50K views · 2 days ago</Text>
              </Box>
            </Flex>
            <Flex>
              <Image src="https://via.placeholder.com/120" alt="Thumbnail" width="120px" height="90px" borderRadius="md" />
              <Box ml={3}>
                <Text fontWeight="bold">Advanced React Techniques</Text>
                <Text fontSize="sm" color="gray.500">Awesome Coder</Text>
                <Text fontSize="sm" color="gray.500">50K views · 2 days ago</Text>
              </Box>
            </Flex>
            <Flex>
              <Image src="https://via.placeholder.com/120" alt="Thumbnail" width="120px" height="90px" borderRadius="md" />
              <Box ml={3}>
                <Text fontWeight="bold">Advanced React Techniques</Text>
                <Text fontSize="sm" color="gray.500">Awesome Coder</Text>
                <Text fontSize="sm" color="gray.500">50K views · 2 days ago</Text>
              </Box>
            </Flex>
            <Flex>
              <Image src="https://via.placeholder.com/120" alt="Thumbnail" width="120px" height="90px" borderRadius="md" />
              <Box ml={3}>
                <Text fontWeight="bold">Advanced React Techniques</Text>
                <Text fontSize="sm" color="gray.500">Awesome Coder</Text>
                <Text fontSize="sm" color="gray.500">50K views · 2 days ago</Text>
              </Box>
            </Flex>
            <Flex>
              <Image src="https://via.placeholder.com/120" alt="Thumbnail" width="120px" height="90px" borderRadius="md" />
              <Box ml={3}>
                <Text fontWeight="bold">Advanced React Techniques</Text>
                <Text fontSize="sm" color="gray.500">Awesome Coder</Text>
                <Text fontSize="sm" color="gray.500">50K views · 2 days ago</Text>
              </Box>
              
            </Flex>
            <Flex>
              <Image src="https://via.placeholder.com/120" alt="Thumbnail" width="120px" height="90px" borderRadius="md" />
              <Box ml={3}>
                <Text fontWeight="bold">Advanced React Techniques</Text>
                <Text fontSize="sm" color="gray.500">Awesome Coder</Text>
                <Text fontSize="sm" color="gray.500">50K views · 2 days ago</Text>
              </Box>
            </Flex>
          
           
           

          </VStack>
        </Box>
      </Grid>
    </>
  );
};

export default VideoPageLayout;
