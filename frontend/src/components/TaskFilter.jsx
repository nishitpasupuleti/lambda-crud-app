import { styles } from "../styles.js"; // Ensure this path points to your styles.js file

export default function TaskFilter({ onFilter, filterStatus }) {
    return (
        <div className={styles.taskFilter.wrapper}>
            <button 
                className={`${styles.taskFilter.btnBase} ${filterStatus === "all" ? styles.taskFilter.btnActive : styles.taskFilter.btnInactive}`} 
                value="all" 
                onClick={onFilter}
            >
                All
            </button>

            <button 
                className={`${styles.taskFilter.btnBase} ${filterStatus === "completed" ? styles.taskFilter.btnActive : styles.taskFilter.btnInactive}`} 
                value="completed" 
                onClick={onFilter}
            >
                Completed
            </button>
            
            <button 
                className={`${styles.taskFilter.btnBase} ${filterStatus === "pending" ? styles.taskFilter.btnActive : styles.taskFilter.btnInactive}`} 
                value="pending" 
                onClick={onFilter}
            >
                Pending
            </button>
        </div>
    )
}