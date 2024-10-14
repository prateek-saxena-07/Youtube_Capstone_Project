import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { Box,Stack,FormLabel,FormControl,Input,Text,Button,Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons'

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password:''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        
        e.preventDefault();

        try{const response=await fetch('http://localhost:5100/api/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            credentials:'include',
        });
        
            if (!response.ok) {
            alert('all fields required')
        throw new Error('Failed to submit form'); // Handle non-2xx responses
                            }

    const data = await response.json(); // Parse the response JSON
            console.log('Response from server:', data);
            setFormData({
                username: '',
                email: '',
                password: ''
            });

            navigate('/login')
        }
        
    catch (error) {
    console.error('Error submitting form:', error); // Catch and log errors
    }
        

       
   }

    return (
        <>
            <center>
                 <Heading as='h2' size='2xl' >Sign uP</Heading>
            </center>
            <Box maxWidth="400px" mx="auto" mt={10} p={4} borderWidth={1} borderRadius="md" mb={10}>
                
                <form onSubmit={handleSubmit}>
                    <Stack>
                        <FormLabel htmlFor="">Username:</FormLabel><Input name="username" value={formData.username} onChange={handleChange} />
                        <FormLabel htmlFor="">Email:<Input name="email" value={formData.email} onChange={handleChange} type="email"/></FormLabel>
                        <FormLabel htmlFor="">Password:<Input type="password" name="password" value={formData.password} onChange={handleChange}/></FormLabel>
                        <Button type="submit" colorScheme="teal">Register</Button>
                        <Link to='/login' ><Input type="button" value={"Login"} /></Link>
                    </Stack>
                    
                           </form>
            </Box>
            <center>
                <Link to={'/'}>Back To <FontAwesomeIcon icon={faHouse} /> </Link>
            </center>
        </>
    )
}

export default SignUp;