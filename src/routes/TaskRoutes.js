const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskConrollers');
router.get("/GetAllTasks", TaskController.GetAllTasks);
router.post("/AddTask/:Task", TaskController.AddTask);
router.delete("/deletTask/:id", TaskController.deletTask);
router.patch("/updateTask/:Task/:id", TaskController.updateTask);
router.patch("/finTask/:value/:id", TaskController.finTask);
module.exports = router;