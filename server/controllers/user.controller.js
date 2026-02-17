import UserModel from "../models/user.model.js"

export const getCurrentUser = async (req,res) => {
    try {
        const userId = req.userId
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({message:"Current User is not found"})
        }
        return res.status(200).json(user)
    } catch (error) {
         return res.status(500).json({message:`getCurrentUser error  ${error}`})
        
    }
}

export const addCredits = async (req, res) => {
    try {
        const amount = parseInt(req.body.amount, 10) || 10;
        const userId = req.userId;
        const user = await UserModel.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.credits = (user.credits || 0) + amount;
        user.isCreditAvailable = user.credits > 0;
        await user.save();

        return res.status(200).json({ credits: user.credits });
    } catch (error) {
        return res.status(500).json({ message: `addCredits error ${error}` });
    }
}