const ToDo = require("../models/toDo");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await ToDo.find();
        res.json(tasks)
    
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createTasks = async (req, res) => {
    try {
        const task = new ToDo(req.body);
        await task.save()
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: error. message })
    }
}

const updateTasks = async (req, res) => {
    try {
        const { id } = req.params;
            ToDo.findByIdAndUpdate( id, req.body, { new: true }, (err, task) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (!task) {
                return res.status(404).json({ error: "task not found" }
                );
            }
            res.status(200).json(task);
        });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const findTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await ToDo.findById(id);
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await ToDo.findByIdAndDelete ( id, (err, task) => {
            if (err) {
                return res.status(500).json({ error: err.message})
            }
            if(!task) {
                return res.status(404).json({ error: `user task ${id} not found`})
            }
            res.status(200).json(`post id ${id} successfully deleted`)
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllTasks,
    createTasks,
    updateTasks,
    findTaskById,
    deleteTask
};