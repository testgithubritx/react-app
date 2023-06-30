import React,{useEffect,useState} from 'react'

const API='https://jsonplaceholder.typicode.com/users'

const FetchApiGetMethod8=()=>{
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch(API).then((res)=>{
            res.json().then((result)=>{
                setData(result)
            })
        })
    },[])
     return(
        <>
        <center>
            <h1>This is fetch api 8</h1>
            <table border='1'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                </tr>
                {
                    data.map((item,index)=>{
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
export default FetchApiGetMethod8;