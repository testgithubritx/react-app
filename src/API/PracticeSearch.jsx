import React from 'react'
import {useState} from 'react'

const data =["Rahul","Dip","Subho","Kartick","Somu","Pranay","Arpan","Rohit","Somnath","Kiran","Ripan"];
const PracticeSearch =()=>{
    const [stdList,setStdList]= useState(data);
    console.log(stdList)
    const handleSearch=(e)=>{
        if(e.target.value ===""){
            setStdList(data);
            return;
        }
        const searchStd= data.filter(item=>item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)
        setStdList(searchStd)
    };
    return(
        <>
        <h1>This is Search</h1>
        <div>
            <input type='search' onChange={handleSearch} placeholder='search'/>
        <div>
            {stdList && stdList.map((e,i)=>{
                return <div key={i}>{e}</div>
            })}
        </div>
        </div>
        </>
    )
}
export default PracticeSearch;