const Task = require('../models/task.model.js');

exports.createTask = (newTask, result) => {
    Task.create(newTask, (err, task) => {
        if (err) {
            return result(err, null);
        }
        result(null, task);
    });
};

exports.getTaskById = (taskId, result) => {
    Task.findById(taskId, (err, task) => {
        if (err) {
            return result(err, null);
        }
        result(null, task);
    });
};

exports.getAllTasks = (result) => {
    Task.getAll((err, tasks) => {
        if (err) {
            return result(err, null);
        }
        result(null, tasks);
    });
};

exports.updateTaskById = (id, task, result) => {
    Task.updateById(id, task, (err, updatedTask) => {
        if (err) {
            return result(err, null);
        }
        result(null, updatedTask);
    });
};

exports.deleteTaskById = (id, result) => {
    Task.remove(id, (err, res) => {
        if (err) {
            return result(err, null);
        }
        result(null, res);
    });
};