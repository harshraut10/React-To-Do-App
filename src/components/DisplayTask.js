import  './DisplayTask.css';
import './todo.css'
import { useState } from "react";
import UpdateForm from './UpdateForm';
const DisplayTask=(props)=>{
    const [showupd,setShowupd]=useState(false)
    const [updateID,setUpdateID]=useState(null)
    const deleteHandler=(id)=>{
        props.delete(id)
    }

    const updHandler=(ob)=>{
        props.update(ob)
    }
    
   
    const showUpd=(upid)=>{
        if(showupd){
            setShowupd(false)
        }
        else if (showupd === false){
            setShowupd(true)
        }
        
        setUpdateID(upid)
        //console.log(upid)
    }

    return(
        <div>
            {
                props.task.map((n)=>{
                    return(
                        <div>
                       <div className="task">
                        <li key={n.id}>
                         <h1 className="text">{n.name}</h1>
                        <h2 className="text">Date: {n.day}</h2>
                        <h2 className="text">Task ID: {n.id}</h2>
                        <button className='button-del'  onClick={()=>deleteHandler(n.id)}>Delete Task</button>
                        <button className='button-upd' onClick={()=>showUpd(n.id)}>Update Task</button>
                        { showupd && <UpdateForm updHandler={updHandler} upid={updateID}/> 
                           
                        }
                        
                        </li>
                        </div>
                        <br></br>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayTask;