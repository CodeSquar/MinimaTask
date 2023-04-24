import styles from "../styles/task.module.css"
import { useState, useEffect, useContext } from 'react';
import { TasksContext } from "../providers/taskProviders"

function Task(props) {
  const { children } = props
  const id = children.id
  const { tasks, setTasks } = useContext(TasksContext);
  const { completedTasks, setCompletedTasks } = useContext(TasksContext)

  const handleComplete = () => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      const taskCompleted = tasks[taskIndex];
      taskCompleted.state = "complete";
      setTasks((prevTasks) => {
        const newTasks = [...prevTasks];
        newTasks.splice(taskIndex, 1);
        return newTasks;
      });
      setCompletedTasks((prevCompletedTasks) => [
        ...prevCompletedTasks,
        taskCompleted,
      ]);
    }
  };
  const handleIncomplete = () => {
    const taskIndex = completedTasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      const taskIncomplete = completedTasks[taskIndex];
      taskIncomplete.state = "incomplete";
      setCompletedTasks((prevTasks) => {
        const newTasks = [...prevTasks];
        newTasks.splice(taskIndex, 1);
        return newTasks;
      });
      setTasks((prevTasks) => [
        ...prevTasks,
        taskIncomplete,
      ]);

    }
  };
  const handleDeleteTaskComplete = (type) =>{
    let taskIndex
    if(type === "task"){
      taskIndex = tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        setTasks((prevTasks) => {
          const newTasks = [...prevTasks];
          newTasks.splice(taskIndex, 1);
          return newTasks;
        });
      }
    }else if(type === "completed"){
      taskIndex = completedTasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        setCompletedTasks((prevTasks) => {
          const newTasks = [...prevTasks];
          newTasks.splice(taskIndex, 1);
          return newTasks;
        });
      }
    }
   
  }

  return (
    <div className={styles["tasks-item"]}>
      <div>
        {children.state === "incomplete"
          ?
          /*<h3 className={styles["task-date"]}>Entrega: 27/04/23</h3> AGREGAR EN LA SEGUNDA VERSION*/
          null
          : children.state === "complete"
            ? (<p className={styles["task-state"]}>Completed</p>)
            : null
        }
        <h2 className={styles["task-title"]}>{children.title}</h2>
        <p className={styles["task-description"]}>{children.description}</p>
      </div>
      <div className={styles["buttons-wrapper"]}>
        {children.state === "incomplete" ?
          (<>
          <button className={styles['buttons-completed']} onClick={handleComplete}>
            completed
          </button>
          <button className={styles['buttons-delete']} onClick={() => handleDeleteTaskComplete("task")}>
            Delete
          </button>
          </>)
          : children.state === "complete" ?
            (<>
              <button className={styles['buttons-incomplete']} onClick={handleIncomplete}>
                Incomplete
              </button>
              <button className={styles['buttons-delete']} onClick={() => handleDeleteTaskComplete("completed")}>
              Delete
            </button>
            </>)
            : null
        }

      </div>



    </div>
  )
}
export default Task
