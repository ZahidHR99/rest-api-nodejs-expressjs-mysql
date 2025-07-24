const taskService = require('../services/task.service.js');

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const task = {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed || false
    };

    taskService.createTask(task, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Task."
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    taskService.getTaskById(req.params.taskId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Task with id ${req.params.taskId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Task with id " + req.params.taskId
                });
            }
        } else res.send(data);
    });
};

exports.findAll = (req, res) => {
    taskService.getAllTasks((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tasks."
            });
        else res.send(data);
    });
};

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    taskService.updateTaskById(req.params.taskId, req.body, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Task with id ${req.params.taskId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating Task with id " + req.params.taskId
                });
            }
        } else res.send(data);
    });
};

exports.delete = (req, res) => {
    taskService.deleteTaskById(req.params.taskId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Task with id ${req.params.taskId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Task with id " + req.params.taskId
                });
            }
        } else res.send({ message: `Task was deleted successfully!` });
    });
};