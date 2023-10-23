// taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const loginController = require('../controllers/loginController');

router.post('/tasks', taskController.createTask);
router.post('/login', loginController.createTask);

module.exports = router;
