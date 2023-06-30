import React,{useState, useEffect} from 'react';
const LocalStorage1=()=>{
    const [count,setCount]=useState(0);

    useEffect(()=>{
        const countStore= localStorage.getItem('value');
        if(countStore){
            setCount(parseInt(countStore));
        }
    },[]);
    useEffect(()=>{
        localStorage.setItem('value',count)
    },[count])

    const handleUpdate=()=>{
        setCount(count+5)
    }
    return(
        <>
        <center>
        <h1>Local Storage</h1>
        <h3>{count}</h3>
        <button onClick={handleUpdate}>Update</button>
        </center>
        </>
    )
}
export default LocalStorage1;