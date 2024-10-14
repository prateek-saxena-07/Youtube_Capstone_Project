import {Box, Card, CardBody,Stack,Text,Heading,Image, HStack, Spacer} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { format } from "timeago.js";
import { useEffect, useState } from "react";


export default function VideoCard(props) {

  const [videoChannel, setVideoChannel] = useState(''); //State holds channel name for the particular video tile

// Fetches profile image of the channel for particular video props passed
useEffect(() => {
    const profile = async () => {
      const response = await fetch(`http://localhost:5100/api/v1/user/${props.props.userId}`);

      const data = await response.json()
      
      console.log(data);
      setVideoChannel(data.profileImg)
      

};


    profile();
  },[props]);

// Component renders video card on homepage
    return (
        <>
<Card  boxShadow={'none'}>
  <CardBody p={0}>
    <Image
      src={props.props.imgUrl}
      alt={props.props.title}
      borderRadius='lg'
      width={'100%'}
      height={"170px"}
    />
            
    <HStack>
      <Image
      src={videoChannel}
      alt={props.props.title}
      borderRadius={'50%'}
      width={'40px'}
      height={"40px"}
                mr={2}
                ml={2}
                mb={6}  />
    
    <Stack mt='4' ml={3} spacing='3' maxWidth="200px">
    <Box lineHeight={1} width={'100px'}>
      <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" fontWeight={900} isTruncated>
        {props.props.title}
      </Text>
    </Box>
      
      <Text color='gray'  fontSize={12} fontWeight={100}>
        {props.props.channel}
      </Text>
     <Text fontSize={12} fontWeight={100} isTruncated pb={'1'}>
  {(props.props.views / 2) + " views"} &middot; {format(props.props.createdAt)}
      </Text>
              </Stack>
              <Spacer/>
              <Stack mr={4} mb={12}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
    </Stack>
    </HStack>
    
  </CardBody>
  
  
</Card>
        </>
    )
}