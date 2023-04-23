import { TasksContext } from "../providers/taskProviders"
import { useState, useEffect, useContext } from 'react';
import Task from "../components/task"
import styles from "../styles/completed.module.css"
import BackBtn from "../components/backBtn"
import Overflow from '../components/overflow';
function Completed() {
  const { completedTasks, setCompletedTasks } = useContext(TasksContext)

  return (
    <>
    
   
<Overflow content={completedTasks}>
      {!completedTasks.length > 0 ? (
        <p className={styles["message"]}>No tasks have been completed yet...</p>
      ):(
        <div className={styles["completed-wrapper"]}>
           {completedTasks.map((task, index) => (
          <Task>
            {task}
          </Task>
        ))}
        </div>
       
      )}
</Overflow>
   
     
    <div className={styles["title-wrapper"]}>
      <BackBtn color="white" border="white"/>
      <h2 className={styles["title"]}>Completed</h2>
    </div>
    </>
  )
}
export default Completed