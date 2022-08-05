import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {

}

export const createTask = async (req, res) => {

}

export const getTask = async (req, res) => {
    const { id } = req.params
    try {
        const task = await Task.findOne({
            where: { id }
        })
        res.json({ task })
    } catch (error) {

    }
}

export const updateTask = async (req, res) => {

}

export const deleteTask = async (req, res) => {

}