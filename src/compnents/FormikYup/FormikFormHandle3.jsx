import React from 'react';
import {useFormik} from 'formik'

const FormikFormHandle3=()=>{

    const formik=useFormik({
        initialValues:{
            name:'',
            address:'',
            email:''
        },
        onSubmit:(value)=>{   //onSubmit a khane key hisab a use hocche
          console.log(value);
          document.write(JSON.stringify(value))
        }
    })
    return(
        <>
        <h1>Example of formik form handle</h1>
        <form onSubmit={formik.handleSubmit}>
            Name:-<input type="text" name="name" value={formik.values.name} onChange={formik.handleChange}/><br/><br/>
            Address:-<input type="text" name="address" value={formik.values.address} onChange={formik.handleChange}/><br/><br/>
            Email:-<input type="email" name="email" value={formik.values.email} onChange={formik.handleChange}/><br/><br/>
            <button>Submit</button>
        </form>
        </>
    )
}
export default FormikFormHandle3