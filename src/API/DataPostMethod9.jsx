// import React from 'react'
import React,{useState} from 'react'
import axios from 'axios'

const API='https://jsonplaceholder.typicode.com/users'

const DataPostMethod9=()=>{
    const[name,setName]=useState('')
    const[uname,setUName]=useState('')
    const[email,setEmail]=useState('')
    
    //     const handleClick=()=>{

    //         axios.post(API,{
    //         name:'kartick',
    //         username:'debnath',
    //         email:'k@gmail.com'
    //     })
    //     .then((scs)=>console.log(scs.data))
    //     .catch((err)=>alert('invalid'))
    // }

    const handleChangeName=(e)=>{
        setName(e.target.value)
    }
    const handleChangeUName=(e)=>{
        setUName(e.target.value)
    }
    const handleChangeEmail=(e)=>{
        setEmail(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(API,{name,uname,email})
        .then(scs=>console.log(scs.data))
        .catch(err=>console.log(err.message))
    }
        
        
    
    
    return(
        <>
        <center>
            <h1>This is Data post</h1>
            <form onSubmit={handleSubmit}>
                {/* Id:<input type='text' onChange={handleChange}/> */}
                Name:<input type='text' onChange={handleChangeName}/><br/>
                User Name:<input type='text' onChange={handleChangeUName}/><br/>
                Email:<input type='text' onChange={handleChangeEmail}/>
            <button>click</button>
            </form>
            
            
        </center>
        </>
    )
}
export default DataPostMethod9