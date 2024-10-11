import Search from './Search';
import Logo from './Logo';
import Signin from './Signinbtn';
import { Flex, Box, Spacer, Button,Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,useDisclosure } from '@chakra-ui/react';
import { faBars, faUpload,faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../utils/userSlice';
import ChannelModal from './ChannelModal';
import UploadModal from './UploadModal';


const Header = ({setSearchTerm}) => { // Accept props
    const { currentUser } = useSelector(state => state.user);
     const { isOpen, onOpen, onClose } = useDisclosure()
  
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

   

    return (
        <>
            <Flex m={2}>

<Button  onClick={onOpen}>
        <FontAwesomeIcon icon={faBars}/>
      </Button>
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'><Box display={'flex'}><Button  onClick={onClose}>
        <FontAwesomeIcon icon={faBars}/>
      </Button><Logo/></Box></DrawerHeader>
          <DrawerBody>
            <p><FontAwesomeIcon icon={faHouse} /> Some contents...</p>
            <p><FontAwesomeIcon icon={faHouse} /> Some contents...</p>
            <p><FontAwesomeIcon icon={faHouse} /> Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>


                <Spacer />
                <Box>
                    <Logo />
                </Box>
                <Spacer />
                <Spacer />
                <Spacer />
                <Box width='55%'>
                    <Search  setSearchTerm={setSearchTerm} /> {/* Pass props to Search */}
                </Box>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer /><Spacer />
                <Box>
                    {currentUser ? (
                        <>
                            <UploadModal><FontAwesomeIcon icon={faUpload} /></UploadModal>
                            <ChannelModal />
                            {currentUser.username} <Button onClick={handleLogout}>Logout</Button>
                        </>
                    ) : (
                        <Link to='/signup'><Signin /></Link>
                    )}
                </Box>
            </Flex>
        </>
    );
}

export default Header;
