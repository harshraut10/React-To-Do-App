import DisplayTask from "./DisplayTask";
import Form from "./Form";
import { useState, useEffect } from "react";

const Home=()=>{
  const [dependency,setDependency]=useState('')
    // const Initial_array=[
    //     {
    //       id:Math.floor(Math.random()*10000),
    //       name:'Go shopping',
    //       day:'4/8/23'
    //     },
    //     {
    //       id:Math.floor(Math.random()*10000),
    //       name:'Home work',
    //       day:'7/8/23'
    //     },
    //     {
    //       id:Math.floor(Math.random()*10000),
    //       name:'Do paperwork',
    //       day:'4/8/23'
    //     }
    
    //   ];
    //const [data,setData]=useState([])
    const [tasks,setTask]=useState(null);
    const [isPending,setIsPending]=useState(true)
    useEffect(()=>{
      
        fetch('http://localhost:5000/tasks')
        .then(res =>{ 
          return res.json();
        })
        .then(data=>{
          setTask(data);
        });
        console.log('changes')
        setIsPending(false)
    },[dependency])
     

      const addTaskHandler= async (ob)=>{
           await fetch ('http://localhost:5000/tasks',{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify(ob)
           
           })
           
            setDependency(ob);
          //  setTask( prevTask=>{
          //      return[...prevTask,responseData]
          //  })
      }

      const removeTask= async (id)=>{
        // const updatedTasks=tasks.filter((task)=>
        //     task.id!==id
        // )
         if(window.confirm('Do you want to delete this task?'))
        await fetch(`http://localhost:5000/tasks/${id}`,
        {
          method: 'DELETE',
        })
        setDependency(id);
        
      }

      const update= async (ob)=>{
        console.log(ob);
        await fetch(`http://localhost:5000/tasks/${ob.id}`,
        {
          method: 'PUT', // or 'PATCH'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(ob),
        })
        setDependency(ob);

      }

    return(
        <div>
            <h1 className="text">TO-DO Tasks</h1>
            
            <Form addTask={addTaskHandler}/>
            {isPending && <div>Loading....</div>}
            <br></br>
            {tasks && <DisplayTask task={tasks} delete={removeTask} update={update}/>}
            
        </div>
    )
}

export default Home;