const { request } = require("express");
const Task = require("../models/taskModel");


// create a task
const createTask = async (request,response) => {
    try {
        const task = await Task.create(request.body);
        response.status(200).json(task);
    } catch (error) {
        response.status(500).json({msg: error.message});
    }
};


// get all tasks
const getTasks = async (request,response) => {
    try {
        const tasks = await Task.find(request.body);
        response.status(200).json(tasks);
    } catch (error) {
        response.status(500).json({msg: error.message});
    }
};

// get a single task
const getTask = async (request,response) => {
    try {
        const {id} = request.params;
        const task = await Task.findById(id);
        if(!task) {
            return response.status(404).json(`No task with id: ${id}`);
        }
        response.status(200).json(task);
    } catch (error) {
        response.staus(500).json({msg: error.message});
    }
};

//Delete task
const deleteTask = async (request,response) => {
    try {
        const {id} = request.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return response.status(404).json(`No task with id: ${id}`);
        }
        response.status(200).send("Task Deleted!");
    } catch (error) {
        response.status(500).json({msg: error.message});
    }
};

//update a task
const updateTask = async (request,response) => {
    try {
        const {id} = request.params;
        const task = await Task.findByIdAndUpdate(
            {_id: id}, request.body, 
            {new: true,runValidators: true}
        );
        if (!task) {
            return response.status(404).json(`No task with id: ${id}`);
        }
        response.status(200).json(task);
    } catch (error) {
        response.status(500).json({msg: error.message});
    }
};

module.exports = {
    createTask: createTask,
    getTasks: getTasks,
    getTask: getTask,
    deleteTask: deleteTask,
    updateTask: updateTask
};