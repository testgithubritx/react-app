import React from 'react'
import {useNavigate,Link,Outlet} from 'react-router-dom'
const Home10=()=>{
    const navigate=useNavigate()
    return(
        <>
        <div className='container'>
            <header className='jumpbotton bg-primary text-light h1 text-center'><br/>
                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, mollitia. Quod maxime error nisi minima dicta consequatur aliquam veniam? Accusamus.</h5>
            </header>
            <button onClick={()=>navigate('/about')}>About10</button><br/>
            <Link to='profile'>Profile10</Link>
            <Outlet/>
        </div>
        </>
    )
}
export default Home10