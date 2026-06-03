import Task from '../models/Task.js'

const addTask = async (req, res) => {
    try {

        const task = req.body;

        if (!task.title || task.title.trim() === "") {
            return res.status(400).json({ message: "Title is required" });
        }

        const newTask = new Task(task);

        const savedTask = await newTask.save()

        res.status(201).json(savedTask);

    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }

}

const fetchTasks = async (req, res) => {
    try {

        const tasks = await Task.find();

        res.status(200).json(tasks);

    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}

const updateTask = async (req, res) => {
    try {

        const updatedInfo = req.body;
        const taskId = req.params.id;

        const updatedTask = await Task.findByIdAndUpdate(taskId, updatedInfo, { new: true });

        res.status(200).json(updatedTask)

    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}

const deleteTask = async (req, res) => {

    try {
        const taskId = req.params.id;

        await Task.findByIdAndDelete(taskId);

        res.status(200).json({ message: "Task deleted" })


    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }

}

export { addTask, fetchTasks, updateTask, deleteTask }