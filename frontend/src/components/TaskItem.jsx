import { useState } from "react";
import { styles } from "../styles.js"; 

export default function TaskItem({ task, onUpdate, onToggleComplete, onDelete }) {

    const [title, setTitle] = useState(task.title);

    const [isTaskEditable, setIsTaskEditable] = useState(false);

    const formatDate = (dateStr) =>
        new Date(dateStr).toLocaleString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });

    return (<>
        <div className={`${styles.taskItem.containerBase} ${task.isCompleted ? styles.taskItem.containerCompleted : styles.taskItem.containerPending}`}>

            {/* Left Section: Checkbox & Content */}
            <div className={styles.taskItem.leftSection}>
                
                {/* Custom Checkbox Wrapper */}
                <div className={styles.taskItem.checkboxWrapper}>
                    <input 
                        type="checkbox" 
                        checked={task.isCompleted} 
                        onChange={() => {
                            onToggleComplete(task._id, task.isCompleted)
                        }} 
                        className={styles.taskItem.checkboxInput}
                    />
                    <svg className={styles.taskItem.checkboxIcon} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </div>

                {/* Content & Meta Wrapper */}
                <div className={styles.taskItem.contentWrapper}>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }} 
                        readOnly={!isTaskEditable}
                        className={`${styles.taskItem.titleBase} ${isTaskEditable ? styles.taskItem.titleEditing : styles.taskItem.titleReadonly} ${task.isCompleted && !isTaskEditable ? styles.taskItem.titleCompleted : ""}`}
                    />

                    {/* Metadata: Tags & Dates */}
                    <div className={styles.taskItem.metaWrapper}>
                        {task.tags.length > 0 && (
                            <div className={styles.taskItem.tagsWrapper}>
                                {task.tags.map((tag) => (
                                    <span key={tag} className={`${styles.taskItem.tagBase} ${task.isCompleted ? styles.taskItem.tagCompleted : styles.taskItem.tagPending}`}>
                                        #{tag.toLowerCase()}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className={styles.taskItem.datesWrapper}>
                            {task.createdAt && (
                                <p className={styles.taskItem.dateCreated}>
                                    <svg className={styles.taskItem.dateIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    Created: {formatDate(task.createdAt)}
                                </p>
                            )}

                            {task.updatedAt && task.updatedAt !== task.createdAt && (
                                <p className={styles.taskItem.dateEdited}>
                                    (Edited: {formatDate(task.updatedAt)})
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section: Actions */}
            <div className={styles.taskItem.actionsWrapper}>
                
                {/* Edit / Cancel Button */}
                <button
                    onClick={() => {
                        if (isTaskEditable)
                            setTitle(task.title)

                        setIsTaskEditable((prev) => !prev)
                    }}
                    className={`${styles.taskItem.editBtnBase} ${isTaskEditable ? styles.taskItem.editBtnEditing : styles.taskItem.editBtnStandard}`}
                >
                    {isTaskEditable ? "✖ Cancel" : (
                        <><svg className={styles.taskItem.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg> Edit</>
                    )}
                </button>

                {/* Save Button (Using your display logic) */}
                <button
                    onClick={() => {
                        if (!title.trim()) return;

                        onUpdate(task._id, title)
                        setIsTaskEditable(false)
                    }}
                    className={`${styles.taskItem.saveBtn} ${isTaskEditable ? "flex" : "hidden"}`}
                >
                    <svg className={styles.taskItem.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                    Save
                </button>

                {/* Delete Button */}
                <button 
                    onClick={() => {
                        onDelete(task._id)
                    }}
                    className={styles.taskItem.deleteBtn}
                >
                    <svg className={styles.taskItem.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    Delete
                </button>

            </div>

        </div >
    </>)
}