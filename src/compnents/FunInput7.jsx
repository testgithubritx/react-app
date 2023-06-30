import React,{useState} from 'react'

const FunInput7=()=>{
    const[name,setName]=useState('')
    const[gender,setGender]=useState([])

    const handleChangeName=(e)=>{
        setName(e.target.value)
    }
    const handleChangeGender=(e)=>{
        setGender(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        document.getElementById('f11').innerHTML=name;
        document.getElementById('f12').innerHTML=gender;
    }
    return(
        <>
        <center>
            <h1>This is Fun Input</h1>
            <form onSubmit={handleSubmit}>
                Name:-<input type='text' value={name} id='f1' onChange={handleChangeName} /><br/>
                Gender:-<input type='radio' name='male' value='male'onChange={handleChangeGender} checked={gender==='male'}/>male
                <input type='radio' name='female' value='female' onChange={handleChangeGender} checked={gender==='female'}/>female
                <br/><br/>
                <button>Submit</button>
            </form>
            <br/><br/><br/>
            <form>
                Name:-<span id='f11'></span><br/>
                Gender:-<span id='f12'></span>
            </form>
        </center>
        </>
    )
}
export default FunInput7;