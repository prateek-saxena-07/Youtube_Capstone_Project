import { Card, CardBody,Stack,Text,Heading,Image} from "@chakra-ui/react";

export default function VideoCard(props) {
    const { title, thumbnail, channel, views, uploadDate } = props.props
    return (
        <>
<Card>
  <CardBody>
    <Image
      src={thumbnail}
      alt={title}
      borderRadius='lg'

    />
    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{title}</Heading>
      
      <Text color='blue.600' fontSize='2xl'>
        {channel}
      </Text>
      <Text>
      {views} &middot; {uploadDate}
      </Text>
    </Stack>
  </CardBody>
  
  
</Card>
        </>
    )
}