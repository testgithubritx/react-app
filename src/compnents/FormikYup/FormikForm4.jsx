import React from 'react'
import {useFormik} from 'formik'

const FormikForm4 =()=>{
    const formik=useFormik({
        initialValues:{
             name:'',
             email:'',
        },

        onSubmit:(values)=>{
           console.log(values);
           document.write(JSON.stringify(values))
           
        }     
    })

    return(
        <>
         <form onSubmit={formik.handleSubmit}>
            <table border="1">
                <tr>
                    <td>Name</td>
                    <td><input type="text" name='name' value={formik.values.name} onChange={formik.handleChange}/></td>
                </tr>
                <tr>
                    <td>Email:-</td>
                    <td><input type='email' name='email' value={formik.values.email} onChange={formik.handleChange}/></td>
                </tr>
                <tr>
                    <td><button type='submit'>submit</button></td>
                </tr>
                </table>
                </form>
                
        </>
    )
}
export default FormikForm4;