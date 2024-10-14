import { SimpleGrid } from "@chakra-ui/react";
import VideoCard from './VideoCard.jsx';
import { Link } from "react-router-dom";

const VideoGrid = ({ videos,key }) => {

    // Component renders the video Grid  on home page
    return (<>
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }}  spacing='10px' m={6}>
            {[...videos].reverse().map((video) => (<Link to={`/video/${video._id}`}>
                <VideoCard props={video} key={video.id}></VideoCard>
            </Link>))}
        </SimpleGrid>
    </>);
}

export default VideoGrid;

