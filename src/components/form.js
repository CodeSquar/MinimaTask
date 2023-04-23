import styles from "../styles/form.module.css"
import { useEffect,useState,useRef,useContext } from "react";
import {TasksContext} from "../providers/taskProviders"
import Btn from "./btn"
function TaskForm(props) {
  const { tasks, setTasks,completedTasks, setCompletedTasks } = useContext(TasksContext);
  const { formActive, setFormActive,lastId,setLastId } = props;
  const componentRef = useRef(null);
  const [isComponentMounted, setIsComponentMounted] = useState(true);

  useEffect(() => {
    setIsComponentMounted(true);

    // Agregar escuchador de eventos para "mousedown" en el objeto "document"
    document.addEventListener("mousedown", handleClickOutside);

    // Eliminar el escuchador de eventos cuando el componente se desmonte
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      setIsComponentMounted(false);
    };
  }, []);

  function handleClickOutside(event) {
    // Si el componente no está montado, no hacer nada
    if (!isComponentMounted) {
      return;
    }

    // Si el clic se produjo dentro del componente, no hacer nada
    if (componentRef.current && componentRef.current.contains(event.target)) {
      return;
    }

    // Si el clic se produjo fuera del componente, llamar a la función "onClickOutside"
    setFormActive(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const taskData = Object.fromEntries(formData.entries());
    const newTask = { ...taskData, id: lastId + 1, state: 'incomplete' };
    setTasks([...tasks, newTask]);
    setLastId(lastId + 1);
    setFormActive(false);
  };

  return (
    <div  className={styles["form-container"]}>
      <form ref={componentRef} onSubmit={handleSubmit}>
        <h2>Agrega una tarea nueva</h2>
        <p>Escribe debajo la informacion de la tarea</p>
        <div className={styles["inputs-container"]}>
          <input required placeholder="Nombre" type="text" name="title" />
          <textarea required placeholder="Descripcion" name="description"></textarea>
        </div>
        <Btn bg="white" type="submit" >Agregar +</Btn>
      </form>
    </div>

  );
}

export default TaskForm;
