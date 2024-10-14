import { SimpleGrid } from "@chakra-ui/react";
import ChannelVideoCard from './ChannelVideoCard.jsx';


const ChannelVideoGrid = ({ videos }) => {
    //props are immutable thats why [...video] is used as it creates a copy of the original array passed as props
    
    //renders all the video cards for channel page for a user

    return (<>
        <SimpleGrid  columns={{ base: 2, md: 3, lg: 4 }}  spacing='10px' m={6}>
            {[...videos].reverse().map((video) => ( <ChannelVideoCard props={video} key={video.id}></ChannelVideoCard>))}
        </SimpleGrid>
    </>);
}

export default ChannelVideoGrid;