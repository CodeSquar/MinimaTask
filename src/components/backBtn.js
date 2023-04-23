import Btn from "./btn"
import {useNavigate} from "react-router-dom"
function BackBtn(props){
    const {size,color,bg,border} = props
    const navigate = useNavigate()
    return(
        <Btn onClick={() => navigate(-1)} bg={bg || "transparent"} color={color || "black"} border={border || "black"}>
        <svg height={size ||"13px" } xmlns="http://www.w3.org/2000/svg" fill={color || "black"} viewBox="3.29 4.65 17.21 13.85"><path d="M4 10L3.64645 10.3536L3.29289 10L3.64645 9.64645L4 10ZM20.5 18C20.5 18.2761 20.2761 18.5 20 18.5C19.7239 18.5 19.5 18.2761 19.5 18L20.5 18ZM8.64645 15.3536L3.64645 10.3536L4.35355 9.64645L9.35355 14.6464L8.64645 15.3536ZM3.64645 9.64645L8.64645 4.64645L9.35355 5.35355L4.35355 10.3536L3.64645 9.64645ZM4 9.5L14 9.5L14 10.5L4 10.5L4 9.5ZM20.5 16L20.5 18L19.5 18L19.5 16L20.5 16ZM14 9.5C17.5898 9.5 20.5 12.4101 20.5 16L19.5 16C19.5 12.9624 17.0376 10.5 14 10.5L14 9.5Z"></path></svg>
            Back
        </Btn>
   
    )
}

export default BackBtn