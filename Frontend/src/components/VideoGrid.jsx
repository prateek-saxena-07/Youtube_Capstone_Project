import { SimpleGrid } from "@chakra-ui/react";
import VideoCard from './VideoCard.jsx';
import { useSelector } from 'react-redux';

const VideoGrid = () => {
    const videos = useSelector((state) => state.homeVideosGrid.videoData)    
    
    return (<>
        <SimpleGrid minChildWidth='250px' spacing='10px' m={6}>
            {videos.map((video) => (<VideoCard props={video} key={video.id}></VideoCard>))}
        </SimpleGrid>
    </>)
}

export default VideoGrid;

