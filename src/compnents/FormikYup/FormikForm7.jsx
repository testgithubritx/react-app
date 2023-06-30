import React from 'react'
import {useFormik} from 'formik'

const FormikForm7=()=>{
    const formik=useFormik({
        initialValues:{
            name:' ',
            email:' ',
        },
        onSubmit:(values)=>{
            console.log(values)
        }
    })
    return(
        <>
        <center>
            <h1>This is Formik Form</h1>
            <form onSubmit={formik.handleSubmit}>
                Name:-<input tpye='text' name='name' value={formik.values.name} onChange={formik.handleChange}/><br/><br/>
                Email:-<input tpye='email' name='email' value={formik.values.email} onChange={formik.handleChange}/><br/><br/>
                <button>Submit</button>
            </form>
        </center>
        </>
    )
}
export default FormikForm7