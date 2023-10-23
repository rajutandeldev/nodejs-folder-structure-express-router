// taskController.js
const Login = require('../models/Login');

// Example controller function
exports.createTask = async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const login = await Login.create({username,password });
    return res.status(201).json(login);
  } catch (err) {
    return res.status(500).json({ error: 'Error creating login entry' });
  }
};
