import { SimpleGrid } from "@chakra-ui/react";
import VideoCard from './VideoCard.jsx';
import videoData from "../utils/mockdata.js";
const VideoGrid = () => {
    
    return (<>
        <SimpleGrid minChildWidth='300px' spacing='40px' m={6}>
            {videoData.map((video) => (<VideoCard props={video}></VideoCard>))}
        </SimpleGrid>
    </>)
}

export default VideoGrid;

