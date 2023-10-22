
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/Tasks';
const TaskSchema = new mongoose.Schema({
    Task: { type: String },
    completed: { type: Boolean, default: false },
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

  exports.AddTask = (taskData) => {
    return new Promise((resolve, reject) => {
      mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('DB connected!!!');
  
        // Créez une nouvelle instance de modèle Task avec les données de la tâche
        const newTask = new Task({Task:taskData});
  
        // Sauvegardez la nouvelle tâche dans la base de données
        return newTask.save();
      }).then((doc) => {
        mongoose.disconnect();
        resolve(doc);
      }).catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
    });
  }

  exports.deletTask = (id) => {
    return new Promise((resolve, reject) => {
      mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        return Task.deleteOne({ _id: id });
      }).then((result) => {
        console.log(result);
        mongoose.disconnect();
        resolve(result);
      }).catch((err) => {
        console.log(err);
        mongoose.disconnect();
        reject(err);
      })
    })
  }

  exports.updateTask = (id, task) => {
    console.log(id, task)
    return new Promise((resolve, reject) => {
        try{
      mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log("rachid")
        return Task.updateOne({ _id: id }, {Task:task})
        
      }).then((doc) => {
        mongoose.disconnect(doc);
        resolve(doc);
      }).catch((err) => {
        mongoose.disconnect(err);
        reject(err);
      })
    }catch(err){
        console.log(err);
    }

    })
  }
  exports.finTask = (id, value) => {
    return new Promise((resolve, reject) => {
      try {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
          return Task.updateOne({ _id: id }, { completed: value });
        }).then((doc) => {
          mongoose.disconnect();
          resolve(doc);
        }).catch((err) => {
          mongoose.disconnect();
          reject(err);
        });
      } catch (err) {
        console.log(err);
      }
    });
  }
  
  
