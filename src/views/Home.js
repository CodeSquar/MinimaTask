import '../App.css';
import Task from "../components/task"
import TaskForm from "../components/form"
import Btn from "../components/btn"
import Overflow from '../components/overflow';
import SadSvg from '../components/sadSvg';
import { useState, useEffect, useContext } from 'react';
import HamburgerMobileBtn from '../components/hamburgerButton';
import { TasksContext } from "../providers/taskProviders"
function App() {
  const { tasks, setTasks, completedTasks, setCompletedTasks } = useContext(TasksContext);
  const [formActive, setFormActive] = useState(false)
  const [lastId, setLastId] = useState(0)
  return (
    <>
      <Overflow content={tasks}>
    

        {!tasks.length > 0 ? (
          <div className='message-wrapper'>
             <SadSvg/>
          <h2 onClick={() => setFormActive(!formActive)} className='message'>You have no tasks, add one +</h2>
          </div>
        ):(
          <div className="tasks-grid">
          {tasks.map((task, index) => (
            <Task>
              {task}
            </Task>
          ))}
        </div>
        )}
      </Overflow>
        
        <div className='tasks-buttons'>
          <Btn bg="var(--main-color)" color="black" onClick={() => setFormActive(!formActive)}>
            Add task +
          </Btn>
        {tasks.length > 0 && (
          <div className='media-disable-buttons'>

            <Btn bg="#87DA66" color="black" to="/completed">
              See completed
            </Btn>

            <Btn bg="#AD2028" color="white" onClick={() => { setTasks([]); setCompletedTasks([]); }}>
              Delete all
            </Btn>
          </div>
        )}
          
          
          <HamburgerMobileBtn className="hamburger-btn"/>
        </div>
      
      {
        formActive && (
          <TaskForm

            formActive={formActive}
            setFormActive={setFormActive}

            tasks={tasks}
            setTasks={setTasks}

            lastId={lastId}
            setLastId={setLastId}
          />
        )

      }
    </>
  );
}

export default App;
