import styles from "../styles/btn.module.css"
import { NavLink } from "react-router-dom"
function Btn(props){
    const {children,bg,color,to,border} = props
    const ElementType  = to ? NavLink : "button";
    
    return(
        <ElementType
            className={styles["btn"]}
            to={to}
            style={{ backgroundColor: bg, color: color || "black", ...(border && { border: `1px solid ${border}` }) }}
            onClick={props.onClick}
        >
            {children}
        </ElementType>
    )
}
export default Btn