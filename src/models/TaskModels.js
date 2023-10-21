
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/Tasks';
const TaskSchema = new mongoose.Schema({
    Task: { type: String },
  });
  const Task = mongoose.model('Task', TaskSchema);
exports.GetAllTasks = () => {
    return new Promise((resolve, reject) => {
      mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('DB conneted!!!')
        return Task.find()
      }).then((doc) => {
        mongoose.disconnect();
        resolve(doc);
      }).catch((err) => {
        mongoose.disconnect();
        reject(err);
      })
    })
  }


