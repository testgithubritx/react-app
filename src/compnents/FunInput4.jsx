import React,{useState} from 'react'

const FunInput4=()=>{
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[address,setAddress]=useState('')

    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleAddress=(e)=>{
        setAddress(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        document.getElementById('f1').value=name;
        document.getElementById('f2').value=email;
        document.getElementById('f3').value=address;

        }
    return(
        <>
        <center>
        <h1>This is Fun Input</h1>
        <form onSubmit={handleSubmit}>
            <table border='1'>
                <tr>
                    <th colspan='4' style={{textAlign:'center'}}>This is Input</th>
                </tr>
                <tr>
                    <td>Name:-</td>
                    <td><input type='text' value={name} onChange={handleName}/></td>
                </tr>
                <tr>
                    <td>Email:-</td>
                    <td><input type='text' value={email} onChange={handleEmail}/></td>
                </tr>
                <tr>
                    <td>Address:-</td>
                    <td><input type='text' value={address} onChange={handleAddress}/></td>
                </tr>
                <tr>
                    <button>Submit</button>
                </tr>
            </table>
        </form>
        <br/><br/><br/>
        <form >
            <table border='1'>
                <tr>
                    <th colspan='4' style={{textAlign:'center'}}>This is Onput</th>
                </tr>
                <tr>
                    <td>Name:-</td>
                    <td><input type='text' id='f1'/></td>
                </tr>
                <tr>
                    <td>Email:-</td>
                    <td><input type='text' id='f2'/></td>
                </tr>
                <tr>
                    <td>Address:-</td>
                    <td><input type='text' id='f3'/></td>
                </tr>
            </table>
        </form>
        </center>
        </>
    )
}
export default FunInput4