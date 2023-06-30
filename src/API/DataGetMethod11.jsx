import React,{useEffect,useState} from 'react'
import axios from 'axios'

const API='https://jsonplaceholder.typicode.com/users'

const DataGetMethod11=()=>{
    const[data,setData]=useState([])
    useEffect(()=>{
      axios.get(API)
      .then((scs)=>{
        setData(scs.data)
      })
      .catch(err=>console.log('invalid'))
    },[])
    return(
        <>
      
        <center>
            <h1>this is data get method</h1>
              <table border='1'>
                <tr>
                <th>Id:</th>
                <th>Name:</th>
                <th>Email:</th>
                </tr>
                {
                    data.map((show,index)=>{
                        return <tr ket={index}>
                            <td>{show.id}</td>
                            <td>{show.name}</td>
                            <td>{show.email}</td>
                        </tr>
                    })
                }
            </table>
        </center>
        </>
    )
}
export default DataGetMethod11;


