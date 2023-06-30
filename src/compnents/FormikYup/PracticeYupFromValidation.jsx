import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PracticeYupFromValidation=()=>{
    const formik = useFormik({
        initialValues:{
            Name:'',
            email:'',
            password:'',
            cpassword:'',
        },
        validationSchema: Yup.object({
            Name: Yup.string()
            .required('*Fill any letter*')
            .min(6,'*min 6 char*')
            .max(10,'*max 10 char*'),

            email: Yup.string()
            .required('*Fill any letter*')
            .email('*invalid email*'),
  
            password: Yup.string()
            .required('*Fill any letter*')
            .matches(/[^\w]/,"atleast one special char")
            .matches(/[A-Z]/,"*one capital*")
            .matches(/[0-9]/,"*atleat one number*"),

            cpassword: Yup.string()
            .required('*Fill any letter*')
            .oneOf([Yup.ref('password')],'*password not match*')
        }),
        onSubmit:(values)=>{
            console.log(values);
            
        }
    })
    return(
        <>
        <center>
         <form onSubmit={formik.handleSubmit}>
            <table border="2">
                <tr>
                    <td>Name:</td>
                    <td>
                        <input type="text" name='Name' value={formik.values.Name} onChange={formik.handleChange} />
                        {formik.touched.Name && formik.errors.Name ? <em>{formik.errors.Name}</em>:null}
                        </td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td><input type="email" name='email' value={formik.values.email} onChange={formik.handleChange} />
                    {formik.touched.email && formik.errors.email ? <em>{formik.errors.email}</em>:null}
                    </td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="text" name='password' value={formik.values.password} onChange={formik.handleChange}/>
                    {formik.touched.password && formik.errors.password ? <em>{formik.errors.password}</em>:null}
 
                    </td>
                </tr>
                <tr>
                    <td>ConfirmPassword:</td>
                    <td><input type="text" name='cpassword' value={formik.values.cpassword} onChange={formik.handleChange}/>
                    {formik.touched.cpassword && formik.errors.cpassword ? <em>{formik.errors.cpassword}</em>:null}
 
                    </td>
                </tr>
                <tr>
                    <button>Submit</button>
                </tr>
            </table>
         </form>
         </center>
        </>
    )
}
export default PracticeYupFromValidation;