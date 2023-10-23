const taskService = require('../services/taskService');

exports.taskBusiness = async (req) =>{
    const { title, description, completed} = req;
    try{
      return await taskService.createUser({title, description, completed});
    }catch(error){
      throw error;
    }
}