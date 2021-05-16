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
                    <div className={styletodo.combtndiv}>
                        <div></div>
                        <div className={styletodo.combtn} onClick={()=>setShowcom(!showcom)}>{showcom?"Hide Completed Task":"Show Completed tasks"}</div>
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
                    <div className={styletodo.details}>
                        <div>Prepared by Ayush</div>
                        <a href="https://github.com/singhalayush1998/Simple-Todo/tree/master/simple-todo">
                            <div style={{display:"flex"}}>
                                <img width="20px" height="20px" style={{padding:".15rem"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Sh_y95E_kbXOuzcT4j3BFzY2ucavlQkKDQ&usqp=CAU" alt="" />
                                <div>GitHub</div>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/ayush-singhal-a238b513b/">
                            <div style={{display:"flex"}}>
                                <img width="25px" height="25px" src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png" alt="" />
                                <div>LinkedIn</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {Todo}