# MERN Todo App

This is a MERN stack application for managing todos. It uses the following technologies:

* **Frontend:** React (https://legacy.reactjs.org/) - Deployed at: https://main--soroco-assignment-todo.netlify.app/
* **Backend:** Express.js (Node.js Framework) (https://expressjs.com/) - Deployed at: https://soroco-assignment-backend.onrender.com
* **Database:** MongoDB (https://www.mongodb.com/)

## API Endpoints

The backend provides the following API endpoints:

* **Get Todos:** Get a list of all todos.
    * URL: `Backend_URL + "/api/todos"`
* **Create New Todo:** Create a new todo.
    * URL: `Backend_URL + "/api/create_todo"` (usually requires data in the request body)
* **Delete Existing Todo:** Delete a specific todo by its ID.
    * URL: `Backend_URL + "/api/todo/:id"` (replace `:id` with the actual ID of the todo)
* **Update Todo:** Update an existing todo.
    * URL: `Backend_URL + "/api/todo"` (usually requires data in the request body)
* **Delete All Completed Todos:** Delete all todos that are marked as completed.
    * URL: `Backend_URL + "/api/todos/completed"`

## Running the Project Locally

**Important:** You'll need Node.js and npm (or yarn) installed on your system to run this project.

**1. Setting Up the Backend:**

a. **Create a `.env` file:** Inside the `backend` folder, create a new file named `.env`. This file will store sensitive information like database connection details.

b. **Configure the `.env` file:** Add the following lines to your `.env` file, replacing the values with your own:
    PORT=YOUR_PORT_NUMBER  # Choose an unused port number (e.g., 3000)
    MONGODB_URL=YOUR_MONGODB_URL


  * **Local MongoDB:** If you have MongoDB installed locally, use `MONGODB_URL=mongodb://localhost:27017/Todo-app`.
  * **MongoDB Atlas:** If you're using MongoDB Atlas, create a new cluster and get the connection URL from there. You can find instructions on https://www.mongodb.com/docs/atlas/tutorial/create-new-cluster/.

c. **Install Dependencies and Start the Backend:**

   - Open your terminal and navigate to the `backend` folder.
   - Run the following commands:

     ```bash
     npm install && npm run start
     ```

     This will install the necessary dependencies and start the backend server.

**2. Setting Up the Frontend:**

a. **Create a `.env` file:** Inside the `client` folder, create a new file named `.env` (similar to the one in the backend).

b. **Configure the `.env` file:** Add the following line to your `.env` file, replacing the value with the actual port number the backend server is running on:
REACT_APP_BACKEND_URL=http://localhost:${YOUR_PORT_NUMBER}  # Replace with the port you chose in step 1.b

c. **Install Dependencies and Start the Frontend:**

   - Open your terminal and navigate to the `client` folder.
   - Run the following commands:

     ```bash
     npm install && npm run start
     ```

     This will install the necessary dependencies and start the frontend application. You should then be able to access your todo app at http://localhost:3000 (replace `3000` with the port you chose in step 1.b).

## Having Trouble?

If you encounter any issues running the project, feel free to reach out for help!
