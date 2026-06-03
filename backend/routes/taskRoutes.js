import express from "express";
import { addTask, fetchTasks, updateTask, deleteTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", fetchTasks);
router.post("/", addTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;