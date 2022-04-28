import React from "react";
import axios from "axios";

import TaskForm from "./TaskForm";

const EditTask = (props) => {
   const { id, title, status, updateItem, handleToggle } = props;

   const formSubmit = (task) => {
      axios
         .put(`http://localhost:3033/api/tasks/${task.id}`, task)
         .then((response) => {
            const result = response.data;
            //  console.log(result)
            updateItem(result);
            handleToggle();
         })
         .catch((err) => {
            alert(err.message);
         });
   };

   return (
      <div>
         <TaskForm
            id={id}
            title={title}
            status={status}
            formSubmit={formSubmit}
         />
      </div>
   );
};

export default EditTask;
