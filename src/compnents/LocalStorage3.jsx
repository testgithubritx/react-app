import React,{useState,useEffect} from 'react'

const LocalStorage3=()=>{
    const [count,setCount]=useState(0);

    useEffect(()=>{
      const countStore= localStorage.getItem('value') //value=key
      if(countStore){
        setCount(parseInt(countStore));
      }
    },[]);

    useEffect(()=>{
        localStorage.setItem('value',count);
    },[count])

    const handleUpdate=()=>{
        setCount(count+5)
    }

    return(
        <>
        <h1>{count}</h1>
        <button onClick={handleUpdate}>Update</button>
        </>
    )
}
export default LocalStorage3;