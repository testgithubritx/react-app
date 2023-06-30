// import React from 'react'
// import axios from 'axios'
// const API='https://jsonplaceholder.typicode.com/users'

// const DataPostMethod5=()=>{
//     const handleChange=()=>{
//        axios.post(API,{
//         name:'Kartick',
//         username:'reactjs',
//         email:'kartick@gmail.com',
//        })
//        .then((scs)=>{
//         console.log(scs.data)
//        })
//        .catch((err)=>{
//         console.log(err.message)
//        })
//     }
//     // useEffect(()=>{
//     //     handleChange()
//     // },[])
//     return(
//         <>
//         <center>
//             <h2>This is Data Post Method</h2>
//             <button onClick={handleChange}>Submit</button>
//         </center>
//         </>
//     )
// }
// export default DataPostMethod5

//dynamic post method

import React,{useState} from 'react'
import axios from 'axios'
const API='https://jsonplaceholder.typicode.com/users'

const DataPostMethod5=()=>{
    const[name,setName]=useState('')

    const handleChange=(e)=>{
        setName(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(API,{name})
        .then((scs)=>{
            console.log(scs.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
    return(
        <>
        <center>
            <h1>This is data post method Dynamic</h1>
            <form onSubmit={handleSubmit}>
                Name:-<input type='text' value={name} onChange={handleChange}/><br/><br/>
                <button>Submit</button>
            </form>
        </center>
        </>
    )
}
export default DataPostMethod5;