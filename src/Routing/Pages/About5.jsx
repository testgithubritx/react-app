import React from 'react'
import {useNavigate,Link} from 'react-router-dom'

const About5=()=>{
    const Navigate=useNavigate()
    return(
        <>
        <div className='container'>
            <header className='jumpbotton bg-danger text-light h1  text-center'>About5</header>
            <button onClick={()=>Navigate('/home5')}>Home5</button>
            <Link to='/home5'>Home5</Link>
        </div>
        
        </>
    )
}
export default About5