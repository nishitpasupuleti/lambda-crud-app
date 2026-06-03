import { useState } from "react";
import { styles } from "../styles.js";

export default function TaskForm({ onAdd }) {

    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim())
            return;
        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase()).filter((tag) => tag !== "");
        onAdd(title, tagsArray);
        setTitle("");
        setTags("");
    }

    return (
        <form onSubmit={handleSubmit} className={styles.taskForm.form}>

            <div className={styles.taskForm.titleWrapper}>
                <input
                    className={styles.taskForm.titleInput}
                    type="text"
                    value={title}
                    placeholder="Enter task title..."
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className={styles.taskForm.tagsWrapper}>
                <input
                    className={styles.taskForm.tagsInput}
                    type="text"
                    value={tags}
                    placeholder="Enter tags (comma separated)..."
                    onChange={(e) => setTags(e.target.value)}
                />
            </div>

            <button type="submit" className={styles.taskForm.submitBtn}>
                Add Task
            </button>

        </form>
    )
}