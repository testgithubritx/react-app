import React from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup'

const YupFormValidation3=()=>{
    const formik= useFormik({
        initialValues:{
            name:'',
            email:'',
            Pass:'',
            cPass:''
        },
        validationSchema: Yup.object({
            name: Yup.string()
            .required('*Fill user name*')
            .min(5,'*min 5 char*')
            .max(10,'*max 10 char*'),

            email: Yup.string()
            .required('*Fill user email*')
            .email('*invalid email address*'),

            Pass: Yup.string()
            .required('*fill password*')
            .min(5,'*min 5 char*')
            .matches(/[^\w]/,'*one spacial car*')
            .matches(/[A-Z]/,'*one capital*'),

            cPass: Yup.string()
            .required('*fill password*')
            .oneOf([Yup.ref('Pass')],"*does not matches*")


        }),
        onSubmit:(values)=>{
            console.log(values);
        }
    })
    return(
        <>
        <h1>This is Yup Form Validation</h1>
        <center>
        <form onSubmit={formik.handleSubmit}>
             <table border='2'>
                <tr>
                    <th colspan='4'>Registration Form</th>
                </tr>
                <tr>
                    <td colspan='1'>User Name:-</td>
                    <td colspan='3'><input type='text' name='name' value={formik.values.name} onChange={formik.handleChange}/>
                    {formik.touched.name && formik.errors.name ? <em>{formik.errors.name}</em> : null}
                    </td>
                </tr>
                <tr>
                    <td colspan='1'>Email:-</td>
                    <td colspan='3'><input type='email' name="email" value={formik.values.email} onChange={formik.handleChange}/>
                    {formik.touched.email && formik.errors.email ? <em>{formik.errors.email}</em> : null}
                    </td>
                </tr>
                <tr>
                    <td colspan='1'>Password:-</td>
                    <td colspan='3'><input type='text' name="Pass" value={formik.values.Pass} onChange={formik.handleChange}/>
                    {formik.touched.Pass && formik.errors.Pass ? <em>{formik.errors.Pass}</em> : null}
                    </td>
                </tr>
                <tr>
                    <td colspan='1'>Confirm Password:-</td>
                    <td colspan='3'><input type='text' name='cPass' value={formik.values.cPass} onChange={formik.handleChange}/>
                    {formik.touched.cPass && formik.errors.cPass ? <em>{formik.errors.cPass}</em> : null}
                    </td>
                </tr>
                <tr>
                    <td><button>Submit</button></td>
                </tr>
            </table>
        
        </form>
        </center>
        </>
    )
}
export default YupFormValidation3