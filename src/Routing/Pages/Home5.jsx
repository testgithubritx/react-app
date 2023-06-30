import React from 'react'
import {useNavigate,Link,Outlet} from 'react-router-dom'

const Home5=()=>{
    const Navigate=useNavigate()
    return(
        <>
        <div className='container'>
            <header className='jumpbotton bg-success text-light h1 text-center'>Home5</header>
           <button onClick={()=>Navigate('/about5')}>About5</button>
        <Link to='/about5'>About5</Link><br/>
        <Link to ='account5'>Accounting_Details5</Link>
        <Outlet/>
        </div>

        </>
    )
}
export default Home5