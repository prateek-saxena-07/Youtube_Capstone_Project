import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';

export default function Login() {
    const [login, setLogin] = useState({username:'',password:''});



    const handleChange = (e) => {
        setLogin({...login,[e.target.name]:e.target.value})
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(login);
    }
    return (
        <>
            <Box maxWidth="400px" mx="auto" mt={8} p={4} borderWidth={1} borderRadius="md">
                <form onSubmit={handleSubmit}>
                
                    <Stack>
                        <FormLabel htmlFor="">Username</FormLabel><Input name="username" type="text" onChange={handleChange} value={login.username} />
                        <FormLabel htmlFor="">Password</FormLabel><Input type="password" onChange={handleChange} name="password" value={login.password} />
                        <Button type="submit" colorScheme="teal">LogIn</Button>
                    </Stack>
                </form>
            </Box>
        </>
    )
}