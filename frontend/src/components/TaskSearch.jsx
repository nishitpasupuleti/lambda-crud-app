import { styles } from "../styles.js"; // Ensure this path points to your styles.js file

export default function TaskSearch({ onSearch, searchTerm }) {
    return (
        <div className={styles.taskSearch.wrapper}>
            <div className={styles.taskSearch.iconWrapper}>
                <svg className={styles.taskSearch.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <input 
                type="text" 
                className={styles.taskSearch.input} 
                value={searchTerm} 
                onChange={onSearch} 
                placeholder="Search tasks..." 
            />
        </div>
    )
}