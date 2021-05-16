import React,{useState} from "react"
import styleinp from "./todoinp.module.css"

const Todoinp = ({handleadd})=>{
    const[text,setText] = useState("") 
    const handlechange = (e)=>{
        const {value} = e.target 
        setText(value)

    }
    const onSubmit = (e)=>{
        e.preventDefault();
        handleadd(text)
        setText("")
    };
    return(
        <form onSubmit={onSubmit}>
            <input
            className={styleinp.inp}
            value={text}
            placeholder = "Add a to-do"
            onChange={handlechange} 
            type="text"/>
            <input className={styleinp.inputbtn} type="submit" value="+"/>
            
        </form>
    )
}
export {Todoinp}