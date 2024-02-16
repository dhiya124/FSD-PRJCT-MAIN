const express=require('express')
const router=express.Router()
const User = require('../models/User');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')



//REGISTER  
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);
        const newUser = new User({ username, email, password: hashedPassword });
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        console.error(err); // Log the error for debugging
        if (err.name === 'ValidationError') {
            // Return a 422 status code for validation errors
            return res.status(422).json({ message: "Validation failed", errors: err.errors });
        } else {
            // For other types of errors, return a 500 status code
            res.status(500).json({ message: "Internal server error" });
        }
    }
});







//LOGIN

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("Email:", email); // Log the email to check if it's received correctly

        // Find the user by email
        const user = await User.findOne({ email });

        console.log("User:", user); // Log the user object to check if it's found

        // Check if user exists
        if (!user) {
            console.log("User not found"); // Log that the user is not found
            return res.status(404).json({ message: "User not found!" });
        }

        // Check if the password is correct
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            console.log("Wrong credentials"); // Log that wrong credentials were provided
            return res.status(401).json({ message: "Wrong credentials!" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: "3d" });

        // Send the token as a response
        res.status(200).json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});



//LOGOUT

router.get("/logout", async (req, res) => {
    try {
        res.clearCookie("token", { sameSite: "none", secure: true });
        res.status(200).send("User logged out successfully!");
    } catch (err) {
        console.error("Error clearing cookie:", err);
        res.status(500).json("Internal Server Error");
    }
});


//REFETCH USER



module.exports=router