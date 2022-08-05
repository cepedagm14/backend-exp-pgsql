import { Router } from "express";
import { getTask, createTask, getTasks, updateTask, deleteTask } from "../controllers/task.controller.js";

const router = Router()

router.get("/task", getTasks)
router.post("tasks", createTask)
router.put("/tasks/:id", updateTask)
router.delete("/tasks/:id", deleteTask)
router.get("/tasks/:id", getTask)