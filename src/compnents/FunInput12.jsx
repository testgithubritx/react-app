import React,{useState} from 'react'

const FunInput12=()=>{
    const[change,setChange]=useState('')
    const handleChange=(e)=>{
        setChange(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(change)
    }
    return(
        <>
        <center>
            <h1>This is Fun input 12</h1>
            <form onSubmit={handleSubmit}>
                <table border='1'>
                    <tr>
                        <td>Name:</td>
                        <td><input type='text' onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td><button>Submit</button></td>
                    </tr>
                </table>
            </form>
        </center>
        </>
    )
}
export default FunInput12;