import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home3 = () => {
    const Navigate=useNavigate();
    return (
        <>
            <div className='container'>
                <header className='jumbotron bg-primary text-light h1 text-center '>Home2</header>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sunt aut officia ab asperiores sapiente dolores nemo mollitia dolorem cum.</p>
                <button onClick={()=>Navigate('/profile3')}>Profile3</button>
            </div>

        </>
    )
}
export default Home3;