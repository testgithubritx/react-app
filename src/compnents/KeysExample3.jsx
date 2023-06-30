import React , {useState} from 'react'

const initialValue=[
    {id:1, name:'kartick'},
    {id:2, name:'subho'},
    {id:3, name:'dip'},
    {id:4, name:'ram'},
    {id:5, name:'arpan'},
    
];
const KeysExample3=()=>{
    const [value,setValue]=useState(initialValue)

    const handleDelete=(id)=>{
        setValue(value.filter((e)=> e.id !== id));
    }
    return(
        <>
        <h1>This is keys exam</h1>
         <tr ><ul style={{marginLeft:'670px'}}>
            {value.map((item)=>{
                return(
                    <li key={item.id}> {item.name}
                       &nbsp; <button onClick={()=>handleDelete(item.id)}>Delete</button>
                    </li>
                )
            })}
        </ul></tr>

        </>
        )
}
export default KeysExample3