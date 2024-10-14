import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Heading
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { loginStart,loginSuccess,loginFail } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons'

export default function Login() {
    const [login, setLogin] = useState({username:'',password:''});

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setLogin({...login,[e.target.name]:e.target.value})
        
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginStart());

        try {
            const res = await fetch('http://localhost:5100/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(login),
                credentials:'include',
            });
            const data = await res.json();
            console.log(data);
            if (!res.ok)
                alert('Invalid user or wrong Credentials');
            else{dispatch(loginSuccess(data));
            navigate('/');}
            
            
        }
        catch (err)
        {
            dispatch(loginFail());
        }

        
        
    }
    return (
        <>
            <center>
                <Heading as='h2' size='2xl' >Login</Heading>
            </center>
            <Box maxWidth="400px" mx="auto" mt={8} p={4} borderWidth={1} borderRadius="md" mb={10}>
                
                <form onSubmit={handleSubmit}>
                
                    <Stack>
                        
                        <FormLabel htmlFor="">Username</FormLabel><Input name="username" type="text" onChange={handleChange} value={login.username} />
        
                        <FormLabel htmlFor="">Password</FormLabel><Input type="password" onChange={handleChange} name="password" value={login.password} />
                        <Button type="submit" colorScheme="teal">LogIn</Button>
                    </Stack>
                </form>
            </Box>
            <center>
                <Link to={'/'}>Back To <FontAwesomeIcon icon={faHouse} /> </Link>
            </center>
        </>
    )
}