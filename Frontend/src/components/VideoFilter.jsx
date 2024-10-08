import { Button, ButtonGroup } from "@chakra-ui/react";

const VideoFilter = () => {
    
    return (<>
        <ButtonGroup pl={6}>
            <Button>
                All
            </Button>
            
            <Button>Podcast</Button>
            <Button>Music</Button>
            <Button>News</Button>
            <Button>Satire</Button>
            <Button>Gaming</Button>
            <Button> Dad Jokes</Button>
            <Button>Live</Button>
        </ButtonGroup>
    </>)
}

export default VideoFilter;