const PlannerEntry = require('../models/plannerEntry');

const getAllPlanners = async (req, res) => {
    try {
        const planners = await PlannerEntry.find();
        res.json(planners)
    } catch (error) {
        res.status(500).json({ error: e.message })
    }
}

const getPlannerById = async (req, res) => {
    try {
        const { id } = req.params;
        const planner = await PlannerEntry.findById(id);
        res.json(planner);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createPlanner = async (req, res) => {
    try {
        const planner = new PlannerEntry(req.body);
        await planner.save()
        res.status(201).json(planner);
    } catch (error) {
        res.status(500).json({ error: e.message })
    }
}

const updatePlanner = async (req, res) => {
    try {
        const { id } = req.params;
        PlannerEntry.findByIdAndUpdate(id, req.body, { new: true }, (err, plannerEntry) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (!plannerEntry) {
                return res.status(404).json({ error: `Planner entry ${id} not found.` });
            }
            res.json(plannerEntry);
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deletePlanner = async (req, res) => {
    try {
        const { id } = req.params;
        PlannerEntry.findByIdAndDelete(id, (err, planner) => {
            if (err) {
                return res.status(500).json({ error: err.message })
            }
            if (!planner) {
                return res.status(404).json({ error: `Planner entry ${id} not found.` })
            }
            res.status(200).json(`Planner entry ${id} successfully deleted`)

        })
    } catch (error) {
        res.status(500).json({ error: e.message })
    }
}

module.exports = {
    getAllPlanners,
    getPlannerById,
    createPlanner,
    updatePlanner,
    deletePlanner,
}