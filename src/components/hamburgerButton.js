import { useContext, useState } from "react";
import { TasksContext } from "../providers/taskProviders"
import Btn from "./btn";
import styles from "../styles/hamburgerButton.module.css"

function HamburgerMobileBtn(props) {
    const { tasks, setTasks, completedTasks, setCompletedTasks } = useContext(TasksContext);
    const [active, setActive] = useState(false)

    function handleActive() {
        setActive(!active)
    }
    return (
        <div className={styles["button-hamburger-wrapper"]}>
            <div  className={styles["hamburger-btn"]}>
                {active && (
                    <div className={styles["buttons-wrapper"]}>
                        <Btn bg="#87DA66" color="black" to="/completed">
                            See completed
                        </Btn>
                        <Btn bg="#AD2028" color="white" onClick={() => { setTasks([]); setCompletedTasks([]); }}>
                            Delete all
                        </Btn>
                    </div>
                )}
                <svg className={styles["hambuger-svg"]} onClick={() => handleActive()} width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 14.25H19M1.5 8H19M1.5 1.75H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>
        </div>


    )


}
export default HamburgerMobileBtn