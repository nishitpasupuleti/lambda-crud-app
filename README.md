# Task Manager App

A full-stack task management application featuring CRUD operations, task filtering, sorting, and tag categorization. Built with Node.js, Express, React (Vite), MongoDB, and Tailwind CSS.

## Live Link
* **Live App:** [https://lambda-crud-app.vercel.app/](https://lambda-crud-app.vercel.app/)

> **Note on Initial Load Time:** The backend is hosted on a free tier. If the application has not been accessed in the last 15 minutes, the server will go to sleep. **Please allow 30–60 seconds for the initial load** as the server wakes from inactivity.

## Tech Stack
* **Frontend:** React (Vite), Tailwind CSS, Axios
* **Backend:** Node.js, Express.js (REST API)
* **Database:** MongoDB
* **Deployment:** Vercel (Frontend), Render (Backend)

## Key Features & Implementation Details

### Core CRUD Functionality
* **Create:** Add new tasks by providing a title and comma separated custom tags (optional). Creation and update timestamps are automatically recorded and displayed for every task.
* **Read:** Fetch and display all active tasks in a responsive UI grid/list.
* **Update:** Dynamically modify a task's title or toggle its completion state (`Done` / `Undone`). Updates automatically refresh the modified timestamp.
* **Delete:** Instantly remove tasks from the database.

### API Endpoints
* `GET /tasks` - Fetch all tasks
* `POST /tasks` - Create a new task
* `PUT /tasks/:id` - Update a task (title, status)
* `DELETE /tasks/:id` - Delete a task

### Bonus & Brownie Point Implementations
1. **Form Validation:** Basic front-end validation prevents adding or saving tasks without a valid title.
2. **Search & Completion Filter:** Real-time search by task title, alongside instant filtering to toggle between `All`, `Completed`, and `Pending` tasks.
3. **Sorting:** User can sort tasks by:
   * Default (Oldest First)
   * Newest First
   * Alphabetical (A-Z)
   * Reverse Alphabetical (Z-A)
   * Completed First
   * Pending First
4. **Tag System & Categorization:** Supports adding comma-separated tags upon task creation. Users can filter and isolate tasks based on specific tag names.

## Folder Structure

```text
FULLSTACK-TASK-MANAGER/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── src/
    │   ├── api/
    │   │   └── taskApi.js
    │   ├── components/
    │   │   ├── TaskFilter.jsx
    │   │   ├── TaskForm.jsx
    │   │   ├── TaskItem.jsx
    │   │   ├── TaskSearch.jsx
    │   │   ├── TaskSort.jsx
    │   │   └── TaskTag.jsx
    │   ├── App.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   └── styles.js
    ├── index.html
    ├── package.json
    └── vite.config.js

```

## Local Setup & Installation

### Prerequisites

* Node.js and npm installed.
* Local or cloud MongoDB database instance.

### 1. Clone the Repository

```bash
git clone https://github.com/nishitpasupuleti/lambda-crud-app
cd lambda-crud-app
 
```

### 2. Backend Setup

1. Navigate to the backend directory:

```bash
cd backend

```

2. Install dependencies:

```bash
npm install

```

3. Create a `.env` file in the backend directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000

```

4. Run the backend server:

For development (requires nodemon):

```bash
npm run dev

```

Or standard execution:

```bash
node server.js

```

### 3. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:

```bash
cd frontend

```

2. Install dependencies:

```bash
npm install

```

3. Start the Vite development server:

```bash
npm run dev

```

*(Note: The frontend communicates directly with the live Render backend API URL. If you want to test with your local database instead, ensure you update the BASE_API_URL in `src/api/taskApi.js` to `http://localhost:5000/` before running).*

## Deployment

* **Frontend:** Deployed via Vercel.
* **Backend:** Deployed via Render.


