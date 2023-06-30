import React,{useState} from 'react'

const Funinpu10=()=>{
    const[name,setName]=useState('')
    const handleChangeName=(e)=>{
        setName(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name)
    }
    return(
        <>
        <center>
            <h1>this is fun input</h1>
            <form onSubmit={handleSubmit}>
                <table border='1'>
                    <tr>
                        <td>Name:</td>
                        <td><input type='text' onChange={handleChangeName}/></td>
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
export default Funinpu10;