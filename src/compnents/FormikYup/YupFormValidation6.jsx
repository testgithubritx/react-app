import React from 'react'
import {useFormik} from 'formik'
import*as Yup from 'yup'

const YupFormValidation6=()=>{
    const formik=useFormik({
        initialValues:{
            name:'',
        },
        validationSchema:Yup.object({
            name:Yup.string()
            .required('**Fill user name**')
            .min(5,'**min 5 char**')
            .max(10,'**max 10 char**')
        }),
        onSubmit:(values)=>{
            console.log(values)
        }
    })
    return(
        <>
        <center>
            <h1>This is Yup Form Validation</h1>
            <form onSubmit={formik.handleSubmit}>
                <table>
                    <tr>
                        <th>Ragistration Form</th>
                    </tr>
                    <tr>
                        <td>User Name:</td>
                        <td><input type='text' name='name' value={formik.values.name} onChange={formik.handleChange} />
                        {formik.touched.name && formik.errors.name ? <em>{formik.errors.name}</em>:null}
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
export default YupFormValidation6;