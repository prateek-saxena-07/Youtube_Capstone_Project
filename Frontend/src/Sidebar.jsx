import { faBars,faHouse,faCompass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VStack,Box, Spacer } from '@chakra-ui/react';
const Sidebar = ({bars}) =>
{
    return (<>
        <br />
        <br />
        <br />
        {bars?<VStack>
            <Box>
                <FontAwesomeIcon icon={faHouse} />
                Home
            </Box>
                <Box><FontAwesomeIcon icon={faCompass} />Explore</Box>
                <Box><FontAwesomeIcon icon={faCompass} />Explore</Box>
                <Box><FontAwesomeIcon icon={faCompass} />Explore</Box>
                <Box><FontAwesomeIcon icon={faCompass} />Explore</Box>
            <Box><FontAwesomeIcon icon={faCompass} />Explore</Box>
            <Box><FontAwesomeIcon icon={faHouse} />Explore</Box>
            <Box><FontAwesomeIcon icon={faHouse} />Explore</Box>
            <Box><FontAwesomeIcon icon={faHouse} />Explore</Box>
        </VStack>
        :
        
            <VStack>
            <Box>
                <FontAwesomeIcon icon={faHouse} />
                
            </Box>
                <Box><FontAwesomeIcon icon={faCompass} /></Box>
                <Box><FontAwesomeIcon icon={faCompass} /></Box>
                <Box><FontAwesomeIcon icon={faCompass} /></Box>
                <Box><FontAwesomeIcon icon={faCompass} /></Box>
            <Box><FontAwesomeIcon icon={faCompass} /></Box>
            <Box><FontAwesomeIcon icon={faHouse} /></Box>
            <Box><FontAwesomeIcon icon={faHouse} /></Box>
            <Box><FontAwesomeIcon icon={faHouse} /></Box>

                
            </VStack>
        }
    </>)
}
export default Sidebar;