import React from "react"
import {v4 as uuid} from "uuid"
import {Todoinp} from "./Todoinp"
import styletodo from './todo.module.css'
import {Todolist} from "./Todolist"
function Todo(){
    const [data,setData] = React.useState([])
    const [showcom,setShowcom]  = React.useState(false)
    const handleAdd = (text)=>{
        const payload = {
            id:uuid(),
            Title: text,
            status: false,
        }
        setData([...data , payload])
    }
    const handleToggle=(id)=>
        {   
            setData(data.map((item)=>item.id===id?{...item,status:!item.status}:item))
        }
    const handleDelete=(id)=>{
            setData(data.filter(item=>item.id !== id))
    }
    return(
        <div className={styletodo.main}>
            <div className={styletodo.sometry}>
                <div className={styletodo.todo}>
                    <h1>To-Do</h1>
                    <Todoinp handleadd={handleAdd}/>
                    <div className={styletodo.combtn}>
                        <div onClick={()=>setShowcom(!showcom)}>{showcom?"Hide Completed Task":"Show Completed tasks"}</div>
                    </div>
                    <div className={styletodo.lists}>
                    {
                        data.filter(item=>!item.status).map(item=>
                            <Todolist 
                                key={item.id}
                                id={item.id}
                                status={item.status}
                                handleDelete={handleDelete}
                                handleToggle={handleToggle}
                                Title={item.Title}
                            />
                        )
                    }
                    </div>
                    <div style={{height:"32vh"}}>
                        {showcom &&
                            <>
                            <div>Completed Tasks</div>
                            <div className={styletodo.lists}>
                            {
                                data.filter(item=>item.status).map(item=><Todolist
                                    key={item.id}
                                    status={item.status}
                                    handleDelete={handleDelete}
                                    id={item.id}
                                    handleToggle={handleToggle}
                                    Title={item.Title}
                                />)
                            }
                            </div>
                            </>
                        }
                    </div>
                    <div style={{border:"1px solid black"}}>
                        <div>Prepared by Ayush</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {Todo}