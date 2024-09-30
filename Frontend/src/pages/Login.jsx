import { useState } from "react"

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
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="">Username</label><input name="username" type="text" onChange={handleChange} value={login.username} />
                <label htmlFor="">Password</label><input type="password" onChange={handleChange} name="password" value={login.password} />
                <input type="submit" />
            </form>
        </>
    )
}