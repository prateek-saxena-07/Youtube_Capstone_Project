import { faBars,faHouse,faCompass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VStack,Box, Spacer } from '@chakra-ui/react';
const Sidebar = () =>
{
    return (<>
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
        
    </>)
}
export default Sidebar;