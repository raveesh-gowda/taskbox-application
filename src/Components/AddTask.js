import React, { useState } from "react";
import axios from "axios";
import task from "../Logo/task.png";

import TaskForm from "./TaskForm";

const AddTask = (props) => {
   const { addItem } = props;

   const [saved, setSaved] = useState(false);

   const formSubmit = (formData) => {
      axios
         .post("http://localhost:3033/api/tasks", formData)
         .then((response) => {
            const result = response.data;
            //   console.log(result);
            addItem(result);
            setSaved(true);
         })
         .catch((err) => {
            console.log(err.message);
         });
   };

   const toggleSaved = () => {
      setSaved(false);
   };

   return (
      <div className="card">
         <h2 className="display-4 card-title">
            Add Task <img src={task} alt="task" width={60} />
         </h2>
         <div className="card-body">
            <TaskForm
               formSubmit={formSubmit}
               saved={saved}
               toggleSaved={toggleSaved}
            />
         </div>
      </div>
   );
};

export default AddTask;
