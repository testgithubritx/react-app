import React from 'react';
import {useNavigate} from 'react-router-dom'


const Home1=()=>{
    const Navigate= useNavigate()
    return(
        <>
        <div className="container" >
            <header className="jumbotton bg-primary text-light h1 text-center" style={{height:'150px'}}><br/>
                <h5> HOME1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magni neque quod quis  delectus aliquam repudiandae nesciunt sed. Deserunt, quos?</h5>
                </header>
            <button className="btn btn-warning text-light" onClick={()=>Navigate('/profile')}>Profile1</button>
        </div>
        </>
    )
}
export default Home1;