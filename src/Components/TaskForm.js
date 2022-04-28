import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskForm = (props) => {
   const {
      formSubmit,
      saved,
      toggleSaved,
      id: slNo,
      title: taskTitle,
      status: taskStatus,
   } = props;

   const [id, setId] = useState(slNo ? slNo : uuidv4());
   const [title, setTitle] = useState(taskTitle ? taskTitle : "");
   const [status, setStatus] = useState(taskStatus ? taskStatus : false);

   const handleTitleChange = (e) => {
      setTitle(e.target.value);
   };

   const handleStatusChange = (e) => {
      setStatus(e.target.checked);
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const formData = {
         id: id,
         title: title,
         status: status,
      };
      //    console.log(formData);
      formSubmit(formData);
   };

   useEffect(() => {
      if (saved) {
         setId(uuidv4());
         setTitle("");
         setStatus(false);
         toggleSaved();
      }
   }, [saved, toggleSaved]);

   return (
      <div>
         <form onSubmit={handleSubmit} >
            <label className="form-label">Title</label>
            <br />
            <input
               type="text"
               value={title}
               onChange={handleTitleChange}
               className="form-control"
            />
            <br />
            <div className="form-check">
               <input
                  type="checkbox"
                  checked={status}
                  onChange={handleStatusChange}
                  className="form-check-input"
               />
               <label className="form-check-label">Completed</label>
            </div>
            <br />
            <input
               type="submit"
               value="Save"
               className="btn btn-outline-success btn-sm"
            />
         </form>
      </div>
   );
};

export default TaskForm;
