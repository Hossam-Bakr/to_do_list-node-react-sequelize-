const Task = require("../models/taskModel");

const asyncHandler = require("../utils/asyncHandler");
const { validationResult } = require("express-validator");

exports.getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.findAll();
  res.json({ status: "success", tasks });
});

exports.ceateTask = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const task = await Task.create(req.body);
  res.status(201).json({ status: "success", task });
});

exports.getOneTask = asyncHandler(async (req, res, next) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(201).json({ status: "success", task });
});

exports.updateTask = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const task = await Task.findByPk(req.params.id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  const updatedTask = await task.update(req.body);
  res.status(201).json({ status: "success", updatedTask });
});

exports.updateTaskStatus = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const task = await Task.findByPk(req.params.id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  const { is_complete } = req.body;
  await task.update({ is_complete });
  res.status(201).json({ status: "success", task: task });
});

exports.deleteTask = asyncHandler(async (req,res) => { 
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    await task.destroy();
    res.status(200).json({status : "success", message : "Task deleted successfully" });
}) 