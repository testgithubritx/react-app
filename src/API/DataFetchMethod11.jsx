import React,{useEffect,useState} from 'react'

const API='https://jsonplaceholder.typicode.com/users'

const DataFetchMethod11=()=>{
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch(API).then((res)=>{
            res.json().then((result)=>{
              setData(result)
            })
        })
    },[])
    // console.log(data)
    return(
        <>
        <center>
            <h1>THis is fetch method</h1>
            <table border='1'>
                <tr>
                <th>Id:</th>
                <th>Name:</th>
                <th>Email:</th>
                </tr>
                {
                    data.slice(0,6).map((show,index)=>{
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
export default DataFetchMethod11