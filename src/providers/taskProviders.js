import { createContext, useState,useEffect } from 'react';

export const TasksContext = createContext({
  tasks: [],
  completedTasks: [],
  setTasks: () => {},
  setCompletedTasks: () => {},
});



export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
  const [completedTasks, setCompletedTasks] = useState(
    JSON.parse(localStorage.getItem('completedTasks')) || []
  );
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        completedTasks,
        setTasks,
        setCompletedTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};