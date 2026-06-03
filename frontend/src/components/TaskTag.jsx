import { styles } from "../styles.js"; 

export default function TaskTag({ onTagFilter, tagName, curTag }) {
    const isActive = curTag === tagName;
    
    return (
        <>
            <button 
                value={tagName} 
                onClick={onTagFilter}
                className={`${styles.taskTag.btnBase} ${isActive ? styles.taskTag.btnActive : styles.taskTag.btnInactive}`}
            >
                {tagName === "All" ? "All Tags" : `#${tagName.toLowerCase()}`}
            </button>
        </>
    )
}