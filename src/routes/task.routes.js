import { Router } from "express";
import { getTask, createTask, getTasks, updateTask, deleteTask } from "../controllers/task.controller.js";

const router = Router()

router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
router.get("/tasks", getTasks);
router.get("/tasks/:id", getTask);

export default router