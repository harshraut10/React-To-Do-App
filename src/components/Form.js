import { useState } from "react";
import './todo.css'
import './form.css'
const Form=(props)=>{
    const [name,setName]=useState('');
    const [day,setDay]=useState('');
    
    const submitHandler=(e)=>{
        e.preventDefault()
        //console.log(name,day)
        if(setName.trim ==='' && setDay.trim ==='')
        {
            alert('Please enter some task')
            return false
        }
        else
        {const ob={
            id:Math.floor(Math.random()*10000),
            name:name,
            day:day
        }
        props.addTask(ob);
        setDay('');
        setName('')
        
        
    }

    }
    const nameHandler=(event)=>{
        setName(event.target.value);
    }

    const dateHandler=(event)=>{
        setDay(event.target.value);
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label className="text">Enter Task name</label>
                <input required type="text" onChange={nameHandler} value={name} />
                <label  className="text">Enter Task day</label>
                <input required type="text" onChange={dateHandler} value={day}/>
                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;