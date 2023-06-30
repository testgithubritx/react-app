import React, {useState} from 'react';
const FunInput1=()=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')

    const handleChangeName =(e)=>{
        setName(e.target.value)
    }
    const handleChangeEmail =(e)=>{
        setEmail(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        document.getElementById('f1').value=name;
        document.getElementById('f2').value=email;
    }
    
    return(
        <div>
        <h1>this is input</h1>
        <form onSubmit={handleSubmit}>
            <table border="1">
                <tr>
                    <td>Name</td>
                    <td><input type="text" value={name}  onChange={handleChangeName}/></td>
                </tr>
                <tr>
                    <td>Email:-</td>
                    <td><input type='email' value={email} onChange={handleChangeEmail}/></td>
                </tr>
                <tr>
                    <td><button>submit</button></td>
                </tr>
                </table>
                </form>
                <br/><br/><br/>
                <form>
                    <table border='1'>
                <tr>
                    <td>Name:=</td>
                    <td><input type='text' id='f1'/></td>
                </tr>
                <tr>
                    <td>Email:=</td>
                    <td><input type='text' id='f2'/></td>
                </tr>
            </table>
        </form>
        </div>
    )
}
export default FunInput1;