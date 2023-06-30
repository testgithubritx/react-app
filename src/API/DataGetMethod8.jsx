import React,{useEffect,useState} from 'react'
import axios from 'axios'

const API='https://jsonplaceholder.typicode.com/users'

const DataGetMethod8=()=>{
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get(API)
        .then(scs=>setData(scs.data))
        .catch(err=>alert('invalid'))
    },[])
    return(
        <>
        <center>
            <h1>This is Data get method 8</h1>
            <table border='1'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                </tr>
                {
                    data.slice(0,5).map((item,index)=>{
                        return <tr key={index}>
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.username}</td>
                              <td>{item.email}</td>
                        </tr>
                    })
                }
            </table>
        </center>
        </>
    )
}
export default DataGetMethod8;