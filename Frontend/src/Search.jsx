import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Box } from '@chakra-ui/react';
const Search = () => {
    
    return (<>
        
        
        <Box className="search" mt={0.5}>
                    <input className="search-input" type="text" placeholder='Search' style={{width:'92%'}} />
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Box>
    </>)
}

export default Search;