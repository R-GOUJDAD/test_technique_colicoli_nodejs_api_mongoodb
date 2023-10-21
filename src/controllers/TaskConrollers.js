// controllers.js
const TaskModel = require('../models/TaskModels');
exports.GetAllTasks= async(req, res)=> {
    await TaskModel.GetAllTasks()
    .then((doc) => res.json(doc))
    .catch((err) => res.json(err));
}
exports.AddTask= async(req, res)=> {
    const taskData= req.params.Task;
    await TaskModel.AddTask(taskData)
    .then((doc) => res.json(doc))
    .catch((err) => res.json(err));
}
exports.deletTask= async(req, res)=> {
    const id= req.params.id;
    await TaskModel.deletTask(id)
    .then((doc) => res.json(doc))
    .catch((err) => res.json(err));
}
exports.updateTask= async(req, res)=> {
    const task= req.params.Task;
    const id= req.params.id;
    console.log(id)
    await TaskModel.updateTask(id,task)
    .then((doc) => res.json(doc))
    .catch((err) => res.json(err));
}