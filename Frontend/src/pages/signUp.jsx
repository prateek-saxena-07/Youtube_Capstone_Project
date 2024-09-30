import { useState } from "react";
import {Link} from 'react-router-dom'


const SignUp = () => {
    
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

        try{const response=await fetch('http://localhost:5100/api/v1/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        
        if (!response.ok) {
        throw new Error('Failed to submit form'); // Handle non-2xx responses
                            }

    const data = await response.json(); // Parse the response JSON
            console.log('Response from server:', data);
            setFormData({
                username: '',
                email: '',
                password: ''
            });
        }
        
    catch (error) {
    console.error('Error submitting form:', error); // Catch and log errors
    }
        

       
   }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Username:</label><input name="username" value={formData.username} onChange={handleChange} />
                <label htmlFor="">Email:<input name="email" value={formData.email} onChange={handleChange}/></label>
                <label htmlFor="">Password:<input type="password" name="password" value={formData.password} onChange={handleChange}/></label>
                <input type="submit" value="SignUp" /><br />
                <Link to='/login'><input type="button" value={"login"} /></Link>

                
           </form>
        </>
    )
}

export default SignUp;