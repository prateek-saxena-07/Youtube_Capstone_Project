import Search from './Search';
import Logo from './Logo';
import Signin from './Signin';
import { Flex, Box ,Spacer} from '@chakra-ui/react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = ({bars,setBars}) => {
    const handleClickBars = () =>
    {
        if (!bars)
        {
            setBars(true);
        }
        else
        {
            setBars(false);
     }
    }
    return (
        <>
        <Flex m={2}>
            <Box>
                <FontAwesomeIcon icon={faBars} onClick={handleClickBars}/>
            </Box>
                 <Spacer/>
            <Box>
                    <Logo></Logo>
            </Box>
                <Spacer />
                <Spacer />
                <Spacer/>
            <Box width='55%'>
                    <Search></Search>
            </Box>
                <Spacer />
                <Spacer />
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