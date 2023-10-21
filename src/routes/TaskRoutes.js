const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskConrollers');
router.get("/GetAllTasks", TaskController.GetAllTasks);
module.exports = router;