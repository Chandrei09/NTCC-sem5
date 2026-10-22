const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware Configuration with multi-port CORS support
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection URI
const dbURI = "mongodb+srv://chandreimukherjee18_db_user:TLF89gE5gCKwx1PG@cluster0.jx82nxu.mongodb.net/RecipeApp?retryWrites=true&w=majority";

// Initialize Database Connection
mongoose.connect(dbURI)
.then(() => console.log('Successfully connected to MongoDB!'))
.catch((err) => console.error('MongoDB connection error:', err));

// API Endpoint: User Signup
app.post('/signup', async (req, res) => {
    try {
        const { fullName, email, password, dob } = req.body;

        // Check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ 
                message: 'User already exists with this email!' 
            });
        }

        // Instantiate and save new user
        const newUser = new User({
            fullName,
            email,
            password,
            dob
        });

        await newUser.save();
        console.log("New user saved to database with DOB:", email, dob);
        res.status(201).json({ 
            message: 'User registered successfully!' 
        });

    } catch (error) {
        console.error('Server error during signup:', error);
        res.status(500).json({ 
            message: 'Server error during signup.' 
        });
    }
});

// API Endpoint: User Login
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ 
                message: 'User not found with this email address!' 
            });
        }

        // Check if password matches
        if (user.password !== password) {
            return res.status(400).json({ 
                message: 'Incorrect password! Please try again.' 
            });
        }

        console.log("User logged in successfully:", email);
        res.status(200).json({ 
            message: 'Logged in successfully!',
            fullName: user.fullName 
        });

    } catch (error) {
        console.error('Server error during login:', error);
        res.status(500).json({ 
            message: 'Server error during login.' 
        });
    }
});

// Start listening for network traffic
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});