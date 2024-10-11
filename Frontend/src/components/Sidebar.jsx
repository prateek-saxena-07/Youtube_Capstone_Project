import { faBars,faHouse,faCompass, faGamepad, faBook, faAddressCard, faBacon, faCab, faDashboard, faDownload } from '@fortawesome/free-solid-svg-icons';
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
                <Box><FontAwesomeIcon icon={faGamepad} /></Box>
                <Box><FontAwesomeIcon icon={faBook} /></Box>
                <Box><FontAwesomeIcon icon={faAddressCard} /></Box>
            <Box><FontAwesomeIcon icon={faBacon} /></Box>
            <Box><FontAwesomeIcon icon={faCab} /></Box>
            <Box><FontAwesomeIcon icon={faDashboard} /></Box>
            <Box><FontAwesomeIcon icon={faDownload} /></Box>

                
            </VStack>
        
    </>)
}
export default Sidebar;