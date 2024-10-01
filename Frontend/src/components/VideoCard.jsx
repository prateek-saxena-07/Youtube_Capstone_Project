import {Box, Card, CardBody,Stack,Text,Heading,Image, HStack, Spacer} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
export default function VideoCard(props) {
    const { title, thumbnail, channel, views, uploadDate } = props.props
    return (
        <>
<Card  boxShadow={'none'}>
  <CardBody p={0}>
    <Image
      src={thumbnail}
      alt={title}
      borderRadius='lg'
      width={'100%'}
      height={"170px"}
    />
            
    <HStack>
      <Image
      src={thumbnail}
      alt={title}
      borderRadius={'50%'}
      width={'40px'}
      height={"40px"}
                mr={2}
                ml={2}
      mb={6}        />
    
    <Stack mt='6' ml={4} spacing='3' maxWidth="200px">
    <Box >
      <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
        {title}
      </Text>
    </Box>
      
      <Text color='blue.600' fontSize='l'>
        {channel}
      </Text>
      <Text>
      {views} &middot; {uploadDate}
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