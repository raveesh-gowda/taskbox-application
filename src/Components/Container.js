import React, { useState, useEffect } from "react";
import axios from "axios";

import List from "./List";
import AddTask from "./AddTask";

const Container = (props) => {
   const [tasks, setTasks] = useState([]);

   useEffect(() => {
      axios
         .get("http://localhost:3033/api/tasks")
         .then((response) => {
            const result = response.data;
            setTasks(result);
         })
         .catch((err) => {
            alert(err.message);
         });
   }, []);

   const addItem = (task) => {
      setTasks([...tasks, task]);
   };

   const removeItem = (id) => {
      const result = tasks.filter((task) => {
         return task.id !== id;
      });
      setTasks(result);
   };

   const updateItem = (task) => {
      const result = tasks.map((t) => {
         if (t.id === task.id) {
            return { ...t, ...task };
         } else {
            return { ...t };
         }
      });
      setTasks(result);
   };

   return (
      <div className="container row">
         <div className="col-md-9">
            <List
               tasks={tasks}
               removeItem={removeItem}
               updateItem={updateItem}
            />
         </div>
         <div className="col-md-3">
            <AddTask addItem={addItem} />
         </div>
      </div>
   );
};

export default Container;
