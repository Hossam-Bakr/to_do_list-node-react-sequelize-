const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasksController");
const { body } = require("express-validator");

router.get("/todos", tasksController.getAllTasks);

router.post(
  "/todos",
  [
    body("content").notEmpty().withMessage("Content is required"),
    body("description").optional().isLength({ max: 255 }),
  ],
  tasksController.ceateTask
);

router.get("/todo/:id", tasksController.getOneTask);

router.patch(
  "/todo/:id",
  [
    body("is_complete").notEmpty().withMessage("Content is required"),
  ],
  tasksController.updateTaskStatus 
);

router.patch(
    "/todo/:id",
    [
      body("is_complete").isBoolean().withMessage("is_complete must be a boolean value (true or false).") , 
      body("is_complete").notEmpty().withMessage("Content is required")
    ],
    tasksController.updateTaskStatus
  );

router.put(
  "/todo/:id",
  [
    body("content").notEmpty().withMessage("Content is required"),
    body("description").optional().isLength({ max: 255 }),
  ],
  tasksController.updateTask
);

router.delete(
  "/todo/:id",
  tasksController.deleteTask
);




module.exports = router;
