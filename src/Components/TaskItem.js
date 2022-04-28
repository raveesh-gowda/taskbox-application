import React, { useState } from "react";
import axios from "axios";

import EditTask from "./EditTask";

const TaskItem = (props) => {
   const { id, title, status, removeItem, updateItem } = props;

   const [toggle, setToggle] = useState(false);

   const handleRemove = () => {
      const confirmRemove = window.confirm("Are you sure?");
      if (confirmRemove) {
         axios
            .delete(`http://localhost:3033/api/tasks/${id}`)
            .then((response) => {
               // console.log(response.data);
               const result = response.data;
               removeItem(result.id);
            })
            .catch((err) => {
               alert(err.message);
            });
      }
   };

   const handleToggle = () => {
      const result = !toggle;
      setToggle(result);
   };

   return (
      <div className="card mt-4">
         {toggle ? (
            <div className="card-body">
               <EditTask
                  id={id}
                  title={title}
                  status={status}
                  updateItem={updateItem}
                  handleToggle={handleToggle}
               />
               <button
                  onClick={handleToggle}
                  className="btn btn-outline-secondary btn-sm"
                  style={{ float: "right" }}
               >
                  Cancel
               </button>
            </div>
         ) : (
            <div
               style={
                  status
                     ? { backgroundColor: "hsla(120,100%,50%,0.3)" }
                     : { backgroundColor: "rgb(255,179,71)" }
               }
            >
               <h6 className="display-6 card-title">{title}</h6>
               <div className="card-body">
                  <button
                     onClick={handleToggle}
                     className="btn btn-outline-dark btn-sm"
                  >
                     Edit
                  </button>
                  <button
                     onClick={handleRemove}
                     className="btn btn-outline-danger btn-sm"
                     style={{ float: "right" }}
                  >
                     Remove
                  </button>
               </div>
            </div>
         )}
      </div>
   );
};

export default TaskItem;
