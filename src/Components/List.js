import React from "react";
import TaskItem from "./TaskItem";

const List = (props) => {
   const { tasks, removeItem, updateItem } = props;

   return (
      <div>
         {tasks.length === 0 ? (
            <div>
               <h3 className="display-3">No tasks found</h3>
               <p className="lead">Add your first task</p>
            </div>
         ) : (
            <div>
               <h2 className="display-4">My Tasks - {tasks.length}</h2>
               {tasks.map((task) => {
                  return (
                     <TaskItem
                        key={task.id}
                        {...task}
                        removeItem={removeItem}
                        updateItem={updateItem}
                     />
                  );
               })}
            </div>
         )}
      </div>
   );
};

export default List;
