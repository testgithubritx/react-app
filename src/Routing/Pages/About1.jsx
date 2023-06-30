import React from 'react';
import './About1.css'
import {Link} from 'react-router-dom'

const About1=()=>{
    return(
        <>
        <div className="container">
            <header className="jumbotton bg-success text-light h1 text-center" style={{height:'150px'}}><br/>
                <h5>ABOUT1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magni neque quod quis delectus aliquam repudiandae nesciunt sed. Deserunt, quos?</h5>
            </header>
            <Link to='/'>Home1</Link>
        </div>
        </>
    )
}
export default About1;