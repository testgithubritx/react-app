import React from 'react';
import Home from './Home';

const Login=()=>{
    return(
        <div className="container">
       <form className="col-md-4 bg-warning " style={{height:'300px',width:'440px',borderTopLeftRadius:'20px',borderEndEndRadius:'20px',marginLeft:'300px'}}>
  <div className="form-group " >
    <label for="exampleInputEmail1" style={{marginTop:'20px'}}>Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={()=>alert('xyz....')}>Submit</button>
</form>

<br/>

<Home/>
</div>
    
    )
}
export default Login;