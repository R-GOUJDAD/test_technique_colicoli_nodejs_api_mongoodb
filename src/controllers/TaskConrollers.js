// controllers.js
const TaskModel = require('../models/TaskModels');

exports.GetAllTasks= async(req, res)=> {
    await TaskModel.GetAllTasks()
    .then((doc) => res.json(doc))
    .catch((err) => res.json(err));
}