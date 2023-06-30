import React, {useState, useEffect} from 'react';

const LocalStorage=()=>{
    const [count, setCount]=useState(0);

    useEffect(()=>{
    const countStore =localStorage.getItem('value');
     if(countStore){
        setCount(parseInt(countStore));
     }
    },[]);

    useEffect(()=>{
        localStorage.setItem('value',count);
    },[count]);

    const handleUpdate=()=>{
        setCount(count+5)
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={handleUpdate}>submit</button>
        </>
    )
}
export default LocalStorage;