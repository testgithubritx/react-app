import React,{useState} from 'react'

const Funinput3=()=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [gender,setGender]=useState([])
   const handleChangeName=(e)=>{
    setName(e.target.value)
   }
   const handleChangeEmail=(e)=>{
    setEmail(e.target.value)
   }
   const handleChangeGender=(e)=>{
    setGender(e.target.value)
   }


   const handleSubmit=(e)=>{
     e.preventDefault();
     document.getElementById('f1').value=name;
     document.getElementById('f2').value=email;
     document.getElementById('f3').value=gender;
   }
    
    return(
        <div>
        <center>
        <form onSubmit={handleSubmit}>
            <table border='2'>
                <tr>
                    <th  colspan='4' >This is Fun input</th>
                </tr>
                <tr>
                    <td colspan='1'>Name:-</td>
                    <td colspan='3'><input type='text'value={name} onChange={handleChangeName}/></td>
                </tr>
                <tr>
                    <td colspan='1'>Email:-</td>
                    <td colspan='3'><input type='email' value={email} onChange={handleChangeEmail}/></td>
                </tr>
                <tr>
                    <td colspan='1'>Gender:-</td>
                    <td ><input type='radio' name='male' value='male' onChange={handleChangeGender} checked={gender==='male'}/>Male</td>
                    <td ><input type='radio' name='female' value='female' onChange={handleChangeGender} checked={gender==='female'}/>Female</td>
                </tr>
                <tr>
                    <td><button type='submit'>Submit</button></td>
                </tr>
            </table>
        </form>
        <br/><br/><br/><br/>
        <form>
            <table border='2'>
                <tr>
                    <th  colspan='4'>Output Is</th>
                </tr>
                <tr>
                    <td colspan='1'>Name:-</td>
                    <td colspan='3'><input type='text' id="f1"/></td>
                </tr>
                <tr>
                    <td colspan='1'>Email:-</td>
                    <td colspan='3'><input type='email' id="f2"/></td>
                </tr>
                <tr>
                    <td colspan='1'>Email:-</td>
                    <td colspan='3'><input type='text' id="f3"/></td>
                </tr>
            </table>
        </form>
        </center>
        </div>
    )
}
export default Funinput3;