import Header from '../components/Header';
import { Box, Grid, Text, Image, Flex, Button } from "@chakra-ui/react";
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpOutline,faThumbsDown as faThumbsDownOutline } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Comments from '../components/Comments';
import { dislike, fetchSuccess, like } from '../utils/videoPlayerSlice';

const VideoPageLayout = () => {
  // const videos = useSelector((state) => state.homeVideosGrid.videoData);
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  console.log("Current Video in Component:", currentVideo);
  const dispatch = useDispatch();

  const params = useParams();
//   console.log("videoplayer",videos);
//   const video = videos.filter(vid => vid._id === params.id);

// console.log(video)
  useEffect(() => {
  
    const fetchComments = async () => {
      const response = await fetch(`http://localhost:5100/api/v1/comments/${params.id}`);
      const data = await response.json();
      console.log(data);
    }
    fetchComments();

  });

  useEffect(() => {
    const fetchVideo = async () => {
      console.log("Fetching video useEffect running");
      const response = await fetch(`http://localhost:5100/api/v1/temp/find/${params.id}`);
      const data = await response.json();
      console.log("data",data);
      dispatch(fetchSuccess(data));
    }
    fetchVideo();
  },[dispatch,params.id]);

  useEffect(() => {
     const views= async () => {
       await fetch(`http://localhost:5100/api/v1/temp/view/${params.id}`, {
         method: 'PUT'
       });
      
    }
    views();
  },[dispatch,params.id])

  const handleLike = async () => {
    const response = await fetch(`http://localhost:5100/api/v1/user/like/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          },
        credentials:'include',
    });
    const data = await response.json();
    console.log(data);
    dispatch(like(currentUser._id))
  }
 const handleDislike = async () => {
    const response = await fetch(`http://localhost:5100/api/v1/user/dislike/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          },
        credentials:'include',
    });
    const data = await response.json();
   console.log(data);
   dispatch(dislike(currentUser._id));
  }
  
 if (!currentVideo) {
    return <div>Loading...</div>; 
  }

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
         {currentVideo ? (
            <Box gridArea="video" bg="gray.200" height="400px">
          <iframe
    width="100%"
    height="100%"
    src={currentVideo.videoUrl}
    title={currentVideo.title}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  /></Box>
) : (
  <p>Loading...</p> 
)}
        {console.log(currentVideo)}
          {/* Video Description */}
          <Box gridArea="description">
            <Text fontSize="2xl" fontWeight="bold">
              {currentVideo.title}
          </Text>

          {currentUser&&currentVideo?(<Button onClick={handleLike}>
            {  currentVideo.likes?.includes(currentUser._id) ? (
              <><FontAwesomeIcon icon={faThumbsUp} />&nbsp;{currentVideo.likes.length}</>
              ) : (
                <> <FontAwesomeIcon icon={faThumbsUpOutline} />&nbsp;{currentVideo.likes.length}</>)}
  
                    
            
          </Button>):
(<Button><FontAwesomeIcon icon={faThumbsUpOutline} />&nbsp;{currentVideo.likes.length}</Button>)}
{" "}
        {currentUser&&currentVideo?(<Button onClick={handleDislike}>
            {  currentVideo.dislikes?.includes(currentUser._id) ? (
                <><FontAwesomeIcon icon={faThumbsDown} />&nbsp;{currentVideo.dislikes.length}</>
              ) : (
                <> <FontAwesomeIcon icon={faThumbsDownOutline} /> &nbsp;{currentVideo.dislikes.length}</>)}
  
   
            
          </Button>):
(<Button><FontAwesomeIcon icon={faThumbsDownOutline} />&nbsp;{currentVideo.dislikes.length}</Button>)}

<Button mt={4} borderRadius={'30px'} color={"black"} background={'white'}>
                                Subscribe
                            </Button>




            <Text fontSize="lg" color="gray.500">
              {"Published by:"+currentVideo.channel}
            </Text>
            <Text mt={2}>
                  {currentVideo.desc}
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
