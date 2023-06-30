import React,{useState} from 'react'

const FunInput9=()=>{
    const[name,setName]=useState('')

    const handleChangeName=(e)=>{
       setName(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log( `${name}`)
        document.getElementById('f1').value=name;
    } 
    return(
        <>
        <center>
        <form onSubmit={handleSubmit}>
            <table border='1'>
                <tr>
                    <th colspan='2'>Input</th>
                </tr>
                <tr>
                    <td>Name:</td>
                    <td><input type='text' value={name} onChange={handleChangeName} /></td>
                </tr>
                <tr>
                    <td><button>Submit</button></td>
                </tr>

            </table>
        </form>
        <br/><br/>
        <form>
            <table border='1'>
                <tr>
                    <th colspan='2'>Output</th>
                </tr>
                <tr>
                    <td>Name:</td>
                    <td><input type='text' id='f1'/></td>
                </tr>
            </table>
        </form>
        </center>
        </>
    )
}
export default FunInput9;