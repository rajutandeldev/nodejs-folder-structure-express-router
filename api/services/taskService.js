const Task = require('../../models/Task');

exports.createUser = async (taskData) => {
    return Task.create(taskData);
  }