//1 ecomerse

import  EcomNavbar from './Routing/Pages/EcomNavbar.jsx';
import  Home from './Routing/Pages/Home.jsx';
import Phone from './Routing/Pages/Phone.jsx';
import Laptop from './Routing/Pages/Laptop.jsx';
import Headphone from './Routing/Pages/Headphone.jsx';
import Furniture from './Routing/Pages/Furniture.jsx';
import Fridge from './Routing/Pages/Fridge.jsx';
import Shoe from './Routing/Pages/Shoe.jsx';
import SmartTV from './Routing/Pages/SmartTV.jsx';
import Smartwatch from './Routing/Pages/Smartwatch.jsx';

import  Register from  './Routing/Pages/Register.jsx'
import  Login from  './Routing/Pages/Login.jsx'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
function App(){
  return(
  <>
  
    <Router>
    <div className="container">
    

<EcomNavbar/>

{/* icon */}
<main>
<div className= " d-flex flex-rows" style={{backgroundColor:'white',height:'100px',}}>


 <div className='k'> 
<img src="https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/a/e/g/iphone-13-pro-mlvw3hn-a-apple-original-imag6vpcvspnzyfy.jpeg?q=70" className=" rounded float-left" alt="..." style={{height:'59px',marginLeft:'49px',marginTop:'27px'}}></img>
<Link to={'phone'} style={{marginLeft:'47px'}} >Phone</Link>
</div>

 <div className='a'>         
<img src='https://rukminim1.flixcart.com/image/312/312/kynb6vk0/computer/k/j/a/-original-imagaufne7h4hgbz.jpeg?q=70'  className=" rounded float-left" alt=''style={{height:'60px',marginLeft:'56px',marginTop:'27px'}}/>
<Link to={'laptop'} style={{marginLeft:'64px'}}>Laptop</Link>
</div>

<div className='r'>
<img src='https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/p/r/z/enco-buds-2-oppo-original-imagh9frfp7gxdb3.jpeg?q=70'  className=" rounded float-left" alt=''style={{height:'80px',marginLeft:'71px',marginTop:'10px'}}/>
<Link to={'headphone'} style={{marginLeft:'60px'}}>Headphone</Link>
</div>


<div className='c'>
<img src="https://rukminim1.flixcart.com/image/612/612/ju04akw0/rocking-chair/f/t/a/1-seater-rosewood-sheesham-sd95-allie-wood-mahogany-finish-original-imaff5sdabb6hzfa.jpeg?q=70"  className="rounded float-left" alt="" style={{height:'75px',marginLeft:'66px',marginTop:'20px'}}/>
<Link to={'furniture'} style={{marginLeft:'56px'}}>Furniture</Link>
</div>

<div className='i'>
<img src="https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/f/m/d/hed-204mfb-p-1313-4-2023-38-haier-628-541-original-imagmvfzvkrfnrwe.jpeg?q=70"  className="k rounded float-left" alt="" style={{height:'70px',marginLeft:'50px',marginTop:'25px'}}/>
<Link to={'fridge'} style={{marginLeft:'46px'}}>Fridge</Link>
</div>

<div className='d'>
<img src="https://rukminim1.flixcart.com/image/400/400/xif0q/shoe/0/n/i/10-385881-10-puma-black-asphalt-original-imaghhrzeu6edfft.jpeg?q=70"  className="rounded float-left" alt="" style={{height:'60px',marginLeft:'50px',marginTop:'30px'}}/>
<Link to={'shoe'} style={{marginLeft:'75px'}}>Shoe</Link>
</div>


<div className='e'>
<img src="https://rukminim1.flixcart.com/image/612/612/xif0q/smartwatch/b/e/t/-original-imagnuu8mfzfsfdz.jpeg?q=70"   className="rounded float-left" alt="" style={{height:'60px',marginLeft:'54px',marginTop:'30px'}}/>
<Link to={'smartwatch'} style={{marginLeft:'40px'}}>Smartwatch</Link>
</div>

<div className='f'>
<img src="https://rukminim1.flixcart.com/image/312/312/kqidx8w0/television/m/1/v/32ha0a00-oneplus-original-imag4gy8yezxdhen.jpeg?q=70" className="rounded float-left" alt="" style={{height:'50px',marginLeft:'30px',marginTop:'35px'}}/>
<Link to={'Smarttv'} style={{marginLeft:'40px'}}>SmartTV</Link> 
</div>




</div>
{/* <div className= "d-flex flex-rows" style={{backgroundColor:'white',height:'50px',marginTop:'0px'}}>
&nbsp;


</div>  */}
</main>




 </div><br/><br/>
 
          <Routes>
         <Route path="/home" element={<Home/>} />
         <Route path='phone' element={<Phone />}/>
          <Route path="laptop" element={<Laptop/>} /> 
          <Route path="headphone" element={<Headphone/>} />
          <Route path="furniture" element={<Furniture/>} />
          <Route path="fridge" element={<Fridge/>} />
          <Route path="shoe" element={<Shoe/>} /> 
          <Route path="smartwatch" element={<Smartwatch/>} /> 
          <Route path="Smarttv" element={<SmartTV/>} />   
         

         <Route path="/register" element={<Register/>}/>
         <Route path="/login" element={<Login/>}/>
         
         
       </Routes>
     </Router>
   


       </>
  )
}
export default App;



//2 wbsedcl
// import './App.css'
// import ReactWbsedcl from './reactCss/ReactWbsedcl.jsx';
// function App(){
//   return(
//     <>
//     <ReactWbsedcl />
//     </>
//   )
// }
// export default App;


//3
// import  Home from './Routing/Pages/Home.jsx';
//  import About from './Routing/Pages/About.jsx';
//  import Profile from './Routing/Pages/Profile.jsx';
//  import Errors from './Routing/Pages/Errors.jsx';
//  import  Register from  './Routing/Pages/Register.jsx'
//  import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
//  function App(){
//    return(
//    <>
//      <Router>

//        <div className="container">
//          <nav className="navbar navbar-dark bg-dark">
//          <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//            <Link to="/user_profile">Profile</Link>
//           <Link to="/register">Register</Link>
//         </nav>
//       </div> 

       
//        <Routes>
//          <Route path="/" element={<Home/>} />
//          <Route path="/about" element={<About/>} />
//          <Route path="/user_profile" element={<Profile/>} />
//          <Route path="/register" element={<Register/>}/>
//          <Route path="*" element={<Errors/>} />
//         </Routes>

//      </Router>
    
//    </>
//    )
//  }
//  export default App;



//4
//nested routing
// import Home1 from './Routing/Pages/Home1.jsx';
// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

// import Accounting_Details from './Routing/Pages/Accounting_Details';
// import Personal_Details from './Routing/Pages/Personal_Details';

// function App(){
//   return(
//       <>
//        <Router>
//         <div className='container'>
//           <nav className="navbar navbar-dark bg-dark">
//             <Link to="/home1">Home1</Link>
//           </nav>
//           </div>
//           <Routes>
//             <Route path="/home1" element={<Home1/>}>
//                <Route index element={<Accounting_Details />}/>
//                <Route path="account" element={<Accounting_Details />}/>
//                <Route path="personal" element={<Personal_Details />}/>
//             </Route>
            
//           </Routes>
//        </Router>
//        </>
//   )

// }
// export default App;


//5 local storage
// import './App.css';
// import LocalStorage from './compnents/LocalStorage';

// function App (){
//   return(
//   <>
//   <LocalStorage/>
//   </>
//   )
// }
// export default App;

//6 hooks

// import './App.css';
// // import UseRefHook ,{InputRef} from './Hooks/UseRefHook'
// import UseReducerHook from './Hooks/UseReducerHook'
// function App (){
//   return(
//   <>
//     {/* <UseRefHook/> */}
//     {/* <InputRef/> */}
   
//    <UseReducerHook />
//    </>
//   );
// }
// export default App;

//7 redux
// import './App.css';
// import Show from './Redux/Show';

// function App (){
//   return(
//   <>
//   <Show/>
//   </>
//   )
// }
// export default App;

// practice hoc

// import './App.css';
// import ParentsHOC from './HOC/ParentsHOC';

// function App (){
//   return(
//   <>
//   <ParentsHOC/>
//   </>
//   )
// }
// export default App;

//routing
// import './App.css';
// import Home1 from './Routing/Pages/Home1';
// import About1 from './Routing/Pages/About1';
// import Profile1 from './Routing/Pages/Profile1';
// import Accounting_Details1 from './Routing/Pages/Accounting_Details1';
// import Personal_Details1 from './Routing/Pages/Personal_Details1';
// import User from './Routing/Pages/User';
// import Error1 from './Routing/Pages/Error1';
// import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';

// function App (){
//   return(
//   <>
//   <Router>
//     <div className="container">
//       <nav className="navbar navbar-dark bg-dark">
//        <Link to="/">Home1</Link>
//        <Link to="/about">About1</Link>
//        <Link to="/profile">Profile1</Link>
//        <Link to="/user/kartick">Kartick</Link>
//        <Link to="/user/subham">Subham</Link>
//        <Link to="/user/rahul">Rahul</Link>
//        <Link to="/user/dip">Dip</Link>
//        <Link to='/user/vaskar'>Vaskar</Link>

//       </nav>
//     </div>
//     <Routes>
//       <Route path="/" element={<Home1/>}/>
//       <Route path="/about" element={<About1/>}/>
//       <Route path="/profile" element={<Profile1/>}>
//         <Route path="account" element={<Accounting_Details1/>}/>
//         <Route path="personal" element={<Personal_Details1/>}/>
//       </Route>
//       {/* <Route path="/user/:name" element={<User/>}/> */}
//       <Route path='/user/:name' element={<User/>} />
//       <Route path="*" element={<Error1/>}/>
//     </Routes>
//   </Router>
//   </>
//   )
// }
// export default App;

// API
// import './App.css';
// import  DataPost from './API/DataPost';

// function App(){
//   return(
//     <>
//     {/* <DataPostDynamic/> */}
//     {/* <DataDelete/> */}
//     {/* < DataPut/> */}
//     <DataPost/>
//     </>
//   )
// }
//  export default App;

// import './App.css';
// import Show from './Redux/Show';

// function App(){
//   return(
//     <>
//     <Show/>
//     </>
//   )
// }
// export default App;

// import './App.css';
// import PracticeYupFromValidation from './compnents/FormikYup/PracticeYupFromValidation';

// function App(){
//   return(
//     <>
//     <PracticeYupFromValidation/>
//     </>
//   )
// }
// export default App;

// import  Snavbar from  './Routing/Pages/Snavbar.jsx'
// import  SHome from  './Routing/Pages/SHome.jsx'
// import  SAbout from  './Routing/Pages/SAbout.jsx'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// function App(){
//   return(
//   <>
//   <Router>
//   <div className='container'>
//   <Snavbar/>
//     </div>
//     <Routes>
//          <Route path="/" element={<SHome/>} />
//          <Route path='/about' element={<SAbout />}/>
//      </Routes>
//      </Router>    
    


//   </>
//   )
// }
// export default App;


// import './App.css'
// import FunProps3 from './compnents/FunProps3'
// function App(){
//   const data='Rahul';
//   const data2='Pal';
//   const data3='cricket'
//   return(
//   <div className='App'>
//     <FunProps3 name={data} title={data2}>
//       <i>{data3}</i>
//     </FunProps3>
//     <FunProps3 name='kartick' title='Debnath'>
//       <i>Football</i>
//     </FunProps3>
//     <FunProps3 name='Subham' title='Saha'>
//       <i>Golf</i>
//     </FunProps3>
//     <FunProps3 name='Dip' title='Ghosh'>
//       <i>Running</i>
//     </FunProps3>
//   </div>
//   )
// }
// export default App;

// import './App.css';
// import UseReducer2 from './Hooks/UseReducer2';

// function App(){
//   return(
//     <div className="App">
//     <UseReducer2/>
//     </div>
//   )
// }
// export default App;

// import Home3 from './Routing/Pages/Home3';
// import About3 from './Routing/Pages/About3';
// import Profile3 from './Routing/Pages/Profile3';
// import AccountingDetails3 from './Routing/Pages/AccountingDetails3';
// import PersonalDetails3 from './Routing/Pages/PersonalDetails3';
// import User3 from './Routing/Pages/User3.jsx'

// import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

// function App(){
//   return(
//   <>
//     <Router>
//       <div className='container'>
//         <nav className='navbar navbar-dark bg-dark'>
//         <Link to='/'>Home3</Link>
//         <Link to='/about3'>About3</Link>
//         <Link to='/profile3'>Profile3</Link>
//         <Link to ='/user3/kartick'>Kartick</Link>
//         <Link to ='/user3/Subho'>Subho</Link>
//         <Link to ='/user3/dip'>Dip</Link>
//         </nav>
        
//       </div>
//         <Routes>
//           <Route path ='/' element={<Home3/>}/>
//           <Route path ='/about3' element={<About3/>}/>
//           <Route path ='/profile3' element={<Profile3/>}>
//             {/* <Route index element={<AccountingDetails3/>}/> */}
//             <Route path='account3' element={<AccountingDetails3/>}/>
//             <Route path='personal3' element={<PersonalDetails3/>}/>
//           </Route>
//           <Route path ='/user3/:name' element={<User3/>}/>
//         </Routes>

      
//     </Router>

//   </>
// )}
// export default App;

// import './App.css';
// import YupFormValidation4 from './compnents/FormikYup/YupFormValidation4';

// function App(){
//   return(
//     <>
//     <YupFormValidation4/>
//     </>
//   )
// }
// export default App;

//routing,nestedrouting
// import './App'
// import Home5 from './Routing/Pages/Home5'
// import About5 from './Routing/Pages/About5'
// import Accounting_Details5 from './Routing/Pages/Accounting_Details5'
// import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

// function App(){
//   return(
//     <>
//     <Router>    <div className='container'>
//       <nav className='navbar navbar-dark bg-dark'>
//         <Link to='/home5'>Home5</Link>
//         <Link to='/about5'>About5</Link>
//       </nav>
//     </div>
//     <Routes>
//       <Route path='/home5' element={<Home5/>}>
//       <Route path='account5' element={<Accounting_Details5/>}/>
//       </Route>
//       <Route path='/about5' element={<About5/>}/>
//     </Routes>
//     </Router>



//     </>
    

//   )
// }
// export default App;

//dynamic routing
// import './App.css'
// import Navbar5 from './Routing/Pages/Navbar5'
// import User5 from './Routing/Pages/User5'
// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'

// function App(){
//   return(
//     <>
//     <Router>
//       <Navbar5/>
//       <Routes>
//         <Route path='/user5/:name' element={<User5/>}/>
//       </Routes>
//     </Router>

//     </>
//   )
// }
// export default App;

// import './App.css'
// import FirstFun from './compnents/FirstFun.jsx'
// function App(){
//   return(
//     <>
//     <FirstFun/>
//     </>
//   )
// }
// export default App;

// import './App.css'
// import Home10 from './Routing/Pages/Home10'
// import About10 from './Routing/Pages/About10'
// import Profile10 from './Routing/Pages/Profile10'
// import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
// function App(){
//   return(
//     <>
//     <Router>
//       <div className='container'>
//       <nav className='navbar navbar-dark bg-dark'>
//         <Link to='/home'>Home10</Link>
//         <Link to='/about'>About10</Link>
//       </nav>
//       </div>
//       <Routes>
//         <Route path='/home' element={<Home10/>}>
//         <Route path='profile' element={<Profile10/>}/>
//           </Route>
//         <Route path='/about' element={<About10/>}/>
//       </Routes>
//     </Router>
//     </>
//   )
// }
// export default App;

// import './App.css'
// import Quiz from './quizproject/Quiz'
// // import UseContext12 from './Hooks/UseContext12'
// function App(){
//   return(
//     <>
//     <Quiz/>
//     {/* <UseContext12/> */}
//     </>
//   )
// }
// export default App;








