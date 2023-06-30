import React from 'react'
import {Link} from 'react-router-dom'

const About3 = () => {
    return (
        <>
            <div className='container'>
                <header className='jumbotron bg-secondary text-light h1 text-center '>About3</header>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sunt aut officia ab asperiores sapiente dolores nemo mollitia dolorem cum.</p>
                <Link to='/home3'>Home3</Link>
            </div>
        </>
    )
}
export default About3;