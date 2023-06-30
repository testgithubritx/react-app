import React from 'react'
import {useNavigate} from 'react-router-dom'

const Login=()=>{
    const navigate = useNavigate();
    const handleLogin =()=>{
        localStorage.setItem('login',true);
        navigate('/')
    }
    return(
        <>
        <div className='container'>
            <center>
                <input className='text-light border-bottom border border-1 bg-dark border-warning m-2' type='text' placeholder='Name'/>
                <br/>
                <input className='text-light border-bottom border border-1 bg-dark border-warning m-2' type='text' placeholder='Password'/>
                <br/>
                <button className='btn btn-success' onClick={handleLogin}>Login</button>

            </center>
        </div>
        </>
    )
}
export default Login;