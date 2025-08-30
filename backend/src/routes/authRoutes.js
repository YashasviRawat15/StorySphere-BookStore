import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req,res) =>{
    try {
        const {email, username, password} = req.body;

        if(!username || !email || !password){
            return res.status(400).json({message: "All fields are required"});
        }

        if(password < 6){
            return res.status(400).json({message: "Password should be atleast 6 characters long."});
        }

        if(username < 3){
            return res.status(400).json({message: "Username should be atleast 3 characters long."});
        }

        // check if user already exists

        const existingEmail = await User.findOne({email});
        if(existingEmail) {
            return res.status(400).json({message: "Email already exists."});
        }

        const existingUsername = await User.findOne({username});
        if(existingEmail) {
            return res.status(400).json({message: "Username already exists."});
        }

    } catch (error) {
        
    }
});

router.post("/login", async (req,res) =>{
    res.send("login");
});

export default router;