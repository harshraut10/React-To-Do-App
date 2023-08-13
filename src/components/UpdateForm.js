import React from 'react'
import { useState } from "react";
import './todo.css'
const UpdateForm = (props) => {

    const [name,setName]=useState('');
    const [day,setDay]=useState('');
    
    const submitHandler=(e)=>{
        e.preventDefault()
        //console.log(name,day)
       
        const ob={
            id:props.upid,
            name:name,
            day:day
        }
        props.updHandler(ob)

        setDay('');
        setName('')


    }
    const nameHandler=(event)=>{
        setName(event.target.value);
    }

    const dateHandler=(event)=>{
        setDay(event.target.value);
    }

  return (
    <div>
       <form onSubmit={submitHandler}>
                <label className='text'>Enter Task name</label>
                <input required value={name} type="text" onChange={nameHandler} />
                <label className='text'>Enter Task day</label>
                <input required value={day} type="text" onChange={dateHandler} />
                <button className="button" type="submit">Submit</button>
            </form>
    </div>
  )
}

export default UpdateForm
