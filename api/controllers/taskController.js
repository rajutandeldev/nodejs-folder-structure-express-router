// taskController.js
const taskBusiness = require('../business/taskBusiness')

// Example controller function
exports.createTask = async (req, res) => {
  try{
    const responseBusiness =  await taskBusiness.taskBusiness(req.body);
    return res.status(201).json(responseBusiness);

  }catch(error){
    return res.status(500).json({ error: 'Error creating task entry' });

  }
};

