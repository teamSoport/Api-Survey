const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { email, password } = req.body;
    res.send('Login successful');
    // Example logic for login
    // Replace with actual database queries
    if (email === 'test@example.com' && password === 'password') {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ token });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
};

const register = async (req, res) => {
    const { email, password } = req.body;
    res.send('Register successful');
    // Example logic for registration
    // Replace with actual database queries
    const hashedPassword = await bcrypt.hash(password, 10);
    return res.status(201).json({ message: 'User registered', email, hashedPassword });
};

module.exports = { login, register };