import React,{useState} from 'react'
import axios from 'axios'

const API='https://jsonplaceholder.typicode.com/users'

const DataPostMethod11=()=>{
    const[name,setName]=useState('')
    const[username,setUserName]=useState('')
    const[email,setEmail]=useState('')
   
    const handleChangeName=(e)=>{
        setName(e.target.value);
    }
    const handleChangeUName=(e)=>{
        setUserName(e.target.value);
    }
    const handleChangeEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handleSubmit=(value)=>{
        value.preventDefault()
        axios.post(API,{name,username,email})
        .then(scs=>console.log(scs.data))
    }

    return(
        <>
        <center>
            <h1>This is data post 11</h1>
            <form onSubmit={handleSubmit}>
                Name:<input type='text' onChange={handleChangeName}/><br/><br/>
                User Name:<input type='text' onChange={handleChangeUName}/><br/><br/>
                Email:<input type='text' onChange={handleChangeEmail}/><br/><br/>
                <button>Submit</button>
            </form>
        </center>
        </>
    )
    
}
export default DataPostMethod11