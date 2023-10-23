// taskController.js
const Task = require('../models/Task');

// Example controller function
exports.createTask = async (req, res) => {
  const { title, description, completed } = req.body;
  
  try {
    const task = await Task.create({ title, description, completed });
    return res.status(201).json(task);
  } catch (err) {
    return res.status(500).json({ error: 'Error creating task' });
  }
};
