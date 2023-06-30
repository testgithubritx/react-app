import React,{useEffect,useState} from 'react'
import axios from 'axios'

const API='https://jsonplaceholder.typicode.com/users'

const DataGetMethod9=()=>{
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get(API)
        .then((scs)=>setData(scs.data))
        .catch((err)=>alert('invalid'))
    },[])
    // console.log(data)
    return(
        <>
        <center>
            <h1>This is Data Get</h1>
            <table border='2'>
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
                    }
                     
                    )
                }
            </table>
        </center>
        </>
    )
}
export default DataGetMethod9