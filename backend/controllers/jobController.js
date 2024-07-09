const Job = require('../models/Job');

exports.createJob = async (req, res) => {
    const { title, description, qualifications, responsibilities, location, salary, employer } = req.body;

    try {
        const job = new Job({ title, description, qualifications, responsibilities, location, salary, employer });
        await job.save();
        res.status(201).json({ message: 'Job created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        res.json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateJob = async (req, res) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteJob = async (req, res) => {
    try {
        await Job.findByIdAndDelete(req.params.id);
        res.json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
