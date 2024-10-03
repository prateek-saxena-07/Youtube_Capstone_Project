import Search from './Search';
import Logo from './Logo';
import Signin from './Signinbtn';
import { Flex, Box ,Spacer, Button, Avatar} from '@chakra-ui/react';
import { faBars, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'


const Header = () => {
    const { currentUser } = useSelector(state => state.user);
    
    return (
        <>
        <Flex m={2}>
            <Button>
                <FontAwesomeIcon icon={faBars} />
            </Button>
                <Spacer />
                
            <Box>
                    <Logo></Logo>
            </Box>
                <Spacer />
                <Spacer />
                <Spacer />
                
            <Box width='55%'>
                    <Search></Search>
            </Box>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer/><Spacer/>
                
            <Box>
                    {currentUser ? <><FontAwesomeIcon icon={faUpload}/><Avatar></Avatar>Test</>
                        :
                    <Link to='/signup'><Signin></Signin></Link>}
            </Box>
        </Flex>
        </>
  );

}

export default Header;