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

export default function ChannelVideoCard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [open, setOpen] = useState(false);
  const handleUpdate = (e) => {
    if (open) { setOpen(false); onClose() }
    else { setOpen(true); onOpen(); }
  };

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
              src={props.props.imgUrl}
              alt={props.props.title}
              borderRadius={"50%"}
              width={"40px"}
              height={"40px"}
              mr={2}
              ml={2}
              mb={6}
            />

            <Stack mt="6" ml={4} spacing="3" maxWidth="200px">
              <Box>
                <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                  {props.props.title}
                </Text>
              </Box>

              <Text color="blue.600" fontSize="l">
                {props.props.channel}
              </Text>
              <Text>{props.props.views + " views"} &middot; {"8 Days ago"}</Text>
            </Stack>
            <Spacer />

            {/* Menu attached to the icon */}
            <Stack mr={4} mb={12}>
              <Menu isOpen={isOpen}>
                <MenuButton as="button" onClick={handleUpdate}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </MenuButton>
                <MenuList minWidth={'auto'}>
                  <MenuItem onClick={handleUpdate}>
                      <VideoUpdateModal videoId={props.props._id} />
                  </MenuItem>
                  <MenuItem onClick={handleUpdate}>
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
