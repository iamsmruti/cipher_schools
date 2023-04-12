import User from "../models/User.js"

export const userDetails = async (req, res) => {
    if(!req.isAuth) return res.json({error: "You must be logged in"})

    try {
        const user = await User.findById({_id: req.user.id})
        res.json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const updateUserDetails = async (req, res) => {
    
}