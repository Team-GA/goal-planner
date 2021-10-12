const ToDo = require("..models/toDo");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await ToDo.find(); res.json(tasks)
    } catch (error) {
        res.status(500).json({ error: e. message })
    }
}

const createTasks = async (req, res) => {
    try {
        const task = new ToDo(req.body);
        await task.save()
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: e. message })
    }
}

const updateTasks = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await task.findByIdAndUpdate( id, req.body, { new: true }, (err, task) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (!task) {
                return res.status(404).json({ message: "task not found" }
                );
            }
            res.status(200).json(post);
        });
    } catch (error) {
        res.status(500).json({ error: e.message })
    }
}

const findTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await task.findById(id);
        if(task) {
            return res.json(201).json(task);
        }
    } catch (error) {
        res.status(500).json({ error: e.message })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await task.findByIdAndDelete ( id, (err, journal) => {
            if (err) {
                return res.status(500).json({ error: err.message})
            }
            if(!task) {
                return res.status(404).json({ error: `user task ${id} not found`})
            }
            res.status(200).json(`post id ${id} successfully deleted`)
        })
    } catch (error) {
        res.status(500).json({ error: e.message })
    }
}

module.exports = {
    getAllTasks,
    createTasks,
    updateTasks,
    findTaskById,
    deleteTask
};