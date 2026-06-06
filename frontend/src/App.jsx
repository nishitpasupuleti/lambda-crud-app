import { useState, useEffect, useMemo } from "react";
import { fetchTasks, addTask, updateTask, deleteTask } from "./api/taskApi";
import TaskItem from "./components/TaskItem.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskSearch from "./components/TaskSearch.jsx";
import TaskFilter from "./components/TaskFilter.jsx";
import TaskSort from "./components/TaskSort.jsx";
import TaskTag from "./components/TaskTag.jsx";
import { styles } from "./styles.js";

export default function App() {

    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [sortOption, setSortOption] = useState("default");
    const [curTag, setCurTag] = useState("All");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadTasks = async () => {
            try {
                setTasks(await fetchTasks());
            } catch (error) {
                console.error("Failed to load tasks :", error);
                setError("Failed to load tasks. Please try again.");
            } finally {
                setLoading(false);
            }
        }
        loadTasks();
    }, [])

    const handleAddTask = async (title, tags) => {
        try {
            const newTask = await addTask({ title: title, isCompleted: false, tags: tags })
            setTasks((prev) => ([...prev, newTask]))
        } catch (error) {
            console.error("Failed to add task :", error);
            setError("Failed to add task. Please try again.");
        }
    }

    const handleToggleComplete = async (id, currentStatus) => {
        try {
            const updatedTask = await updateTask(id, { isCompleted: !currentStatus })
            setTasks((prev) => (prev.map((task) => task._id === id ? (updatedTask) : (task))))
        } catch (error) {
            console.error("Failed to update the task :", error);
            setError("Failed to update task. Please try again.");
        }
    }

    const handleUpdateTask = async (id, newTitle) => {
        try {
            const updatedTask = await updateTask(id, { title: newTitle })
            setTasks((prev) => (prev.map((task) => task._id === id ? (updatedTask) : (task))))
        } catch (error) {
            console.error("Failed to update the task : ", error);
            setError("Failed to update task. Please try again.");
        }
    }

    const handleDeleteTask = async (id) => {
        try {
            await deleteTask(id);
            setTasks((prev) => (prev.filter((task) => task._id !== id)))
        } catch (error) {
            console.error("Failed to delete the task :", error);
            setError("Failed to delete task. Please try again.");
        }
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleFilter = (e) => {
        setFilterStatus(e.target.value);
    }

    const handleSort = (e) => {
        setSortOption(e.target.value);
    }

    const handleTagFilter = (e) => {
        setCurTag(e.target.value);
    }

    const filteredTasks = tasks.filter((task) => {
        if (filterStatus === "completed") {
            return task.isCompleted
        }
        if (filterStatus === "pending") {
            return !task.isCompleted
        }
        return true
    }).filter((task) => {
        return task.title.toLowerCase().includes(searchTerm.toLowerCase());
    }).filter((task) => {
        if (curTag === "All") {
            return true;
        }
        return task.tags.includes(curTag);
    });

    const sortedTasks = [...filteredTasks];

    if (sortOption === "az") {
        sortedTasks.sort((a, b) =>
            a.title.localeCompare(b.title)
        )
    }

    if (sortOption === "za") {
        sortedTasks.sort((a, b) =>
            b.title.localeCompare(a.title)
        )
    }

    if (sortOption === "completed") {
        sortedTasks.sort((a, b) =>
            b.isCompleted - a.isCompleted
        )
    }

    if (sortOption === "pending") {
        sortedTasks.sort((a, b) =>
            a.isCompleted - b.isCompleted
        )
    }

    if (sortOption === "newest") {
        sortedTasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    const tagList = useMemo(() => {
        const tags = ["All"];
        for (const task of tasks) {
            for (const tag of task.tags) {
                if (!tags.includes(tag)) tags.push(tag);
            }
        }
        return tags;
    }, [tasks]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-blue-200/60 rounded-2xl bg-blue-50/30">
                <svg className="animate-spin h-8 w-8 text-blue-600 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <h3 className="text-[15px] font-bold text-blue-900">Loading tasks...</h3>
            </div>
        </div>
    );

    return (
        <div className={styles.app.background}>
            <div className={styles.app.container}>


                <header className={styles.app.headerWrapper}>
                    <h1 className={styles.app.headerTitle}>TaskFlow</h1>
                    <p className={styles.app.headerSubtitle}>Organize your work, beautifully.</p>
                </header>


                {error && (
                    <div className={styles.app.errorBox}>
                        <svg className={styles.app.errorIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span className={styles.app.errorText}>{error}</span>
                    </div>
                )}

                <TaskForm onAdd={handleAddTask} />

                <div className={styles.app.controlsContainer}>
                    <TaskFilter onFilter={handleFilter} filterStatus={filterStatus} />
                    <div className={styles.app.controlsRight}>
                        <TaskSearch onSearch={handleSearch} searchTerm={searchTerm} />
                        <TaskSort onSort={handleSort} sortOption={sortOption} />
                    </div>
                </div>

                {tagList.length > 1 && (
                    <div className={styles.app.tagsSection}>
                        <h3 className={styles.app.tagsTitle}>Filter by Tag</h3>
                        <div className={styles.app.tagsWrapper}>
                            {tagList.map((tag) => {
                                return <TaskTag key={tag} onTagFilter={handleTagFilter} tagName={tag} curTag={curTag} />
                            })}
                        </div>
                    </div>
                )}

                <div className={styles.app.listContainer}>
                    {sortedTasks.length > 0 ? (
                        sortedTasks.map((task) => {
                            return <TaskItem key={task._id} task={task} onUpdate={handleUpdateTask} onToggleComplete={handleToggleComplete} onDelete={handleDeleteTask} />
                        })
                    ) : (
                        <div className={styles.app.emptyBox}>
                            <div className={styles.app.emptyIconWrapper}>
                                <svg className={styles.app.emptyIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                            <h3 className={styles.app.emptyTitle}>No tasks found</h3>
                            <p className={styles.app.emptySubtitle}>Add a new task above to get started.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}