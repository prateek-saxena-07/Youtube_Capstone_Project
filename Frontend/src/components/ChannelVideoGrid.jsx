import { SimpleGrid } from "@chakra-ui/react";
import ChannelVideoCard from './ChannelVideoCard.jsx';
import { Link } from "react-router-dom";

const ChannelVideoGrid = ({ videos }) => {
    return (<>
        <SimpleGrid minChildWidth='250px' spacing='10px' m={6}>
            {videos.map((video) => ( <ChannelVideoCard props={video} key={video.id}></ChannelVideoCard>))}
        </SimpleGrid>
    </>);
}

export default ChannelVideoGrid;