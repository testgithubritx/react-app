import React,{useEffect,useState} from 'react'

const UseEffect5=()=>{
    const [data,setData]=useState(0)
    useEffect(()=>{
        console.log('kartick');
        setInterval(()=>{
            setData(data+5)
        },2000)
        document.title=data+1;
    })
    return(
        <>
        <center>
           <h1> This is use effect</h1>
           <h2>{data}</h2>
        </center>
        </>
    )
}
export default UseEffect5