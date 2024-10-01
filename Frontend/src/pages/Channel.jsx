import { Grid,GridItem,ButtonGroup,Button,HStack,VStack,Image,Box ,Text,Heading, Tab, Tabs, TabList} from "@chakra-ui/react"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VideoGrid from "../components/VideoGrid";
import Header from "../components/Header";
const Channel = () => {
    return (<>
        <Header></Header>
        <VStack>
            <Box mb={8}  ml={10} mr={4}>
                {/* Banner */}
                <Image borderRadius={'30px'} src="https://yt3.googleusercontent.com/vygK_AaY5no21qC2M341JS_fnWRqaTjDt1ZeGkgeqgqMcRF1pq1PHpTmvNe5JKPzR55CNVe286w=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"></Image>
                
            </Box>
            <Box width={'90vw'}>
                <HStack>
                    <Box>
                        {/* Logo */}
                        <Image src="https://yt3.googleusercontent.com/AweUrODK-FaOP9jpCoya2F4fsz7Mdip1NJXG42OlplDLuWPPKwUQS7RIfJuXtQASX4-0w3L4=s160-c-k-c0x00ffffff-no-rj" borderRadius={'50%'}></Image>
                    </Box>

                    <Box>
                        <VStack>
                            {/* Channel name,moto etc */}<Box>
                            <Heading as='h2'>YeahMad</Heading>
                        <Text>@yeahmadtv
•
2.18M subscribers
•
                                94 videos</Text>
                            <Text>
                                Sponsorship Enquires: Yeahmad@rightclick.gg ...<b>more</b></Text>
                            <Text>yeahmad.com
                                    <b>and 3 more links</b></Text>
                            <Button mt={4} borderRadius={'30px'} color={"black"} background={'white'}>
                                Subscribe
                            </Button>
                            </Box>
                            
                        </VStack>
                    </Box>
                </HStack>
            </Box>
            <Box width={'90vw'}>
                {/* Tabs =>Home,video,etc */}
                <Tabs>
                    <TabList>
                        <Tab>
                            Home
                        </Tab>
                        <Tab>
                            Videos
                        </Tab>
                        <Tab>Shorts</Tab>
                        <Tab>Playlists</Tab>
                        <Tab>
                            Posts
                        </Tab>
                        <Tab>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </Tab>
                    </TabList>
                </Tabs>
                
            </Box>

            <Box width={'90vw'}>
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
        </ButtonGroup>
        </Box>
        </VStack>
        <Box ml={6}>
            <VideoGrid></VideoGrid>
        </Box>
            

            

    </>)
}
export default Channel;