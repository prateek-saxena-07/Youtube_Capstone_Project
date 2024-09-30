import User from "../model/user.model.js";

export const Register = async(req,res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.create({ username, email, password });
        
        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error registering user',error:error});
    }
    

}

