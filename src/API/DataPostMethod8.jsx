import React,{useState} from 'react'
import axios from 'axios'

const API='https://jsonplaceholder.typicode.com/users'

const DataPostMethod8=()=>{
    const[name,setName]=useState('')
    const[username,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const handleChangeName=(e)=>{
        setName(e.target.value)
    }
    const handleChangeUserName=(e)=>{
        setUserName(e.target.value)
    }
    const handleChangeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(API,{name,username,email})
        .then(scs=>console.log(scs.data))
        .catch(err=>alert('invalid'))
    }
    return(
        <>
        <center>
            <h1>this is data post 8</h1>
            <form onSubmit={handleSubmit}>
            Name:<input type='text' onChange={handleChangeName}/><br/>
            User Name<input type='text' onChange={handleChangeUserName}/><br/>
            Email:<input type='text' onChange={handleChangeEmail}/><br/>
            <button>submit</button>
            </form>
        </center>
        </>
    )
}
export default DataPostMethod8