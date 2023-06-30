import React from 'react'
import {useFormik} from 'formik'

const FormHandle10=()=>{
    const formik=useFormik({
        initialValues:{
            name:''
        },
        onSubmit:(values)=>{
            console.log(JSON.stringify(values))
        
        }
    })
    return(
        <>
        <center>
            <h1>This is Form handle</h1>
            <form onSubmit={formik.handleSubmit}>
                <table border='1'>
                    <tr>
                        <td>Name:</td>
                        <td><input type='text' name='name' value={formik.values.name} onChange={formik.handleChange}/></td>
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
export default FormHandle10;