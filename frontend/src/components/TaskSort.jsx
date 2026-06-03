import { styles } from "../styles.js"; // Ensure this path points to your styles.js file

export default function TaskSort({ onSort, sortOption }) {
    return (
        <>
            <select 
                value={sortOption} 
                onChange={onSort}
                className={styles.taskSort.select}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%233b82f6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: `right 0.75rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1em 1em` }}
            >
                <option value={"default"}>Default</option>
                <option value={"az"}>A-Z</option>
                <option value={"za"}>Z-A</option>
                <option value={"completed"}>Completed First</option>
                <option value={"pending"}>Pending First</option>
                <option value={"newest"}>Newest First</option>
            </select>
        </>
    )
}