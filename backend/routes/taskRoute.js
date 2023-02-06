const express = require("express");
const Task = require("../models/taskModel");
const router = express.Router();
const {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
} = require("../controllers/taskController");


// router.route("/").post(createTask).get(getTasks);
// router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask);

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
// router.put("/api/tasks/:id", updateTask);
router.patch("/:id", updateTask);

module.exports = router;