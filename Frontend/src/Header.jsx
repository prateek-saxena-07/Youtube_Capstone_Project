import Sidebar from './Sidebar';
import Search from './Search';
import Logo from './Logo';
import Signin from './Signin';
import { Flex, Box ,Spacer} from '@chakra-ui/react';



const Header = () => {
    
    return (
        <>
        <Flex>
            <Box>
                <Sidebar></Sidebar>
            
            </Box>
                 <Spacer/>
            <Box>
                    <Logo></Logo>
            </Box>
                <Spacer />
                <Spacer />
                <Spacer/>
            <Box width='80%'>
                    <Search></Search>
            </Box>
                <Spacer />
                <Spacer />
            <Box>
                <Signin></Signin>
            </Box>
        </Flex>
        </>
  );

}

export default Header;