import { createError } from "../error.js"
import User from "../model/user.model.js";


export const update = async (req, res, next) => {
    //req.user.id comes from verifytoken middleware

    if (req.params.id === req.user.id)
    { 
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },
                { new: true }
            );
            const { password, ...others } = updatedUser._doc;
            res.status(200).json(others)
        }
        catch (err)
        {
            next(err)
            //goes to custom error handling middleware in server.js
        }
    }
    else
    {
        return next(createError(403, 'You can only update your account'));

    }
    
}

