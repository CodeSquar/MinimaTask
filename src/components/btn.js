import styles from "../styles/btn.module.css"
import { NavLink } from "react-router-dom"
function Btn(props){
    const {children,bg,color,to,border,className} = props
    const ElementType  = to ? NavLink : "button";
    
    return(
        <ElementType
            className={!className ? styles["btn"] : `${styles["btn"]} ${className}`}
            to={to}
            style={{ backgroundColor: bg, color: color || "black", ...(border && { border: `1px solid ${border}` }) }}
            onClick={props.onClick}
        >
            {children}
        </ElementType>
    )
}
export default Btn