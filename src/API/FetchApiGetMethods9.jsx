// import React,{useEffect,useState} from 'react'

// const API='https://jsonplaceholder.typicode.com/users';

// const FetchApiGetMethod9=()=>{
//     const[data,setData]=useState([])
//     useEffect(()=>{
//         fetch(API).then((res)=>{
//           res.json().then((result)=>{
//             setData(result)
//           })
//         })
//     },[])
//     console.log(data)
//     return(
//         <>
//         <center>
//             <h1>This is fatch Api</h1>
//             <table border='1'>
//                 <tr>
//                     <th>ID</th>
//                     <th> Name</th>
//                     <th>User Name</th>
//                     <th>Email</th>
//                 </tr>
//                 {
//                     data.map((item)=>
//                         <tr>
//                             <td>{item.id}</td>
//                             <td>{item.name}</td>
//                             <td>{item.username}</td>
//                             <td>{item.email}</td>
//                         </tr>
                        
//                     )
//                 }
//             </table>
           
//         </center>
//         </>
//     )
// }
// export default FetchApiGetMethod9

// import React,{useEffect,useState} from 'react'

// const API='https://jsonplaceholder.typicode.com/users'

// const FetchApiGetMethod9=()=>{
//     const[data,setData]=useState([])
// useEffect(()=>{
//     fetch(API).then((result)=>{
//       result.json().then((res)=>{
//        setData(res)
//       })
//     })
// },[])
// // console.log(data)
//     return(
//         <>
//         <center>
//             <h1>THis is Fatch Api</h1>
//             <table border='1'>
//                 <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>User Name</th>
//                     <th>Email</th>
//                 </tr>
//                 {
//                     data.map((item,index)=>{
//                     return <tr key={index}>
//                         <td>{item.id}</td>
//                         <td>{item.name}</td>
//                         <td>{item.username}</td>
//                         <td>{item.email}</td>

//                     </tr>
//                     })
//                 }
//             </table>
//         </center>
//         </>
//     )
// }
// export default FetchApiGetMethod9

import React,{useEffect,useState} from 'react'

const API='https://jsonplaceholder.typicode.com/users'

const FetchApiGetMethods9=()=>{
    const[data,setData]=useState([])
    // useEffect(()=>{
    //     fetch(API).then((result)=>{
    //         result.json().then((res)=>{
    //             setData(res)
    //         })
    //     })
    // },[])
    useEffect(()=>{
        fetch(API).then((res)=>{
           res.json().then((result)=>{
            setData(result)
           })
        })
    },[])
    console.log(data)
    return(
        <>
        <center>
            <h1>This is Fetch api</h1>
        </center>
        </>
    )
}
export default FetchApiGetMethods9