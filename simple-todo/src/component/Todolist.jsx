import React from "react"
import stylelist from "./Todolist.module.css"
function Todolist({Title,handleToggle,id,status,handleDelete}){
    return(
        <>
        <div className={stylelist.list}>
            <input className={stylelist.inpcheck}  onChange={()=>handleToggle(id)} type="checkbox" checked={status}/>
            
            <div className={stylelist.titlediv}>    
                {
                status?<div style={{textDecorationLine:"line-through"}}>{`${Title}`}</div>:<div>{`${Title}`}</div>  
                }
            </div>
            
            <div className={stylelist.delbtn} onClick={()=>handleDelete(id)}>🚮</div>
        </div>
        </>
    )
}
export {Todolist}