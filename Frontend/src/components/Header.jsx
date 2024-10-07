import Search from './Search';
import Logo from './Logo';
import Signin from './Signinbtn';
import { Flex, Box ,Spacer, Button, Avatar} from '@chakra-ui/react';
import { faBars, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import { logout } from '../utils/userSlice';
import ChannelModal from './ChannelModal';
import UploadModal from './UploadModal';


const Header = () => {
    const { currentUser } = useSelector(state => state.user);
    // console.log(currentUser)
    const dispatch=useDispatch()
    const handleLogout = () => {
        
        dispatch(logout());
    }
    
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
                    {currentUser ? <><UploadModal><FontAwesomeIcon icon={faUpload} /></UploadModal><ChannelModal></ChannelModal>{currentUser.username} <Button onClick={handleLogout}>Logout</Button></>
                        :
                    <Link to='/signup'><Signin></Signin></Link>}
                </Box>
                
                
        </Flex>
        </>
  );

}

export default Header;