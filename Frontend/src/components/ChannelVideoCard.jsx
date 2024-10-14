import React, { useState } from "react";
import {
  Box,
  Card,
  CardBody,
  Stack,
  Text,
  HStack,
  Spacer,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import VideoUpdateModal from "./VideoUpdateModal";
import VideoDeleteModal from "./VideoDeleteModal";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { useEffect} from "react";

export default function ChannelVideoCard(props) {
  

  const [videoChannel, setVideoChannel] = useState('');
  
useEffect(() => {
    const profile = async () => {
      const response = await fetch(`http://localhost:5100/api/v1/user/${props.props.userId}`);

      const data = await response.json()
      
      console.log(data);
      setVideoChannel(data.profileImg)
      

};


    profile();
  },[props]);

  return (
    <>
      <Card boxShadow={"none"}>
        <CardBody p={0}>
          
          <Link to={`/video/${props.props._id}`}>
               <Image
            src={props.props.imgUrl}
            alt={props.props.title}
            borderRadius="lg"
            width={"100%"}
            height={"170px"}
          />
            </Link>

          <HStack>
            <Image
              src={videoChannel}
              alt={props.props.title}
              borderRadius={"50%"}
              width={"40px"}
              height={"40px"}
              mr={2}
              ml={2}
              mb={6}
            />

            <Stack mt="6" ml={4} spacing="3" maxWidth="200px">
              <Box width={'100px'}>
                <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                  {props.props.title}
                </Text>
              </Box>

              <Text fontSize={12} fontWeight={100}>
                {props.props.channel}
              </Text>
              <Text fontSize={12} fontWeight={100} pb={2}>{(props.props.views)/2 + " views"} &middot; {format(props.props.createdAt)}</Text>
            </Stack>
            <Spacer />

            {/* Menu attached to the icon */}
            <Stack mr={4} mb={12}>
              <Menu >
                <MenuButton as="button" >
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </MenuButton>
                <MenuList minWidth={'auto'}>
                  <MenuItem >
                      <VideoUpdateModal videoId={props.props._id} />
                  </MenuItem>
                  <MenuItem>
                      <VideoDeleteModal videoId={props.props._id} />
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
}
