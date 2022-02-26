import React from "react";
import {useFormik, validateYupSchema} from 'formik'


function App() {
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: values =>{
      console.log('form', values);
    },
    validate: values => {
      let errors = {};
      if (!values.emailField) {
        errors.emailField = 'Field Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailField = 'Invalid email address';
      }
      if(!values.pswField) errors.pswField = 'Field Required';
      return errors;
    }
  })
  // TODO: add a const called formik assigned to useFormik()

  return (
    <div >
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input name='emailField' type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
        <div id='emailError'> {formik.errors.emailField ? <div style={{color:'red'}}>{formik.errors.emailField}</div>: null}</div>
        <div>Password</div>
        <input name='pswField' type='text' onChange={formik.handleChange} value={formik.values.pswField}/>
        <div id="pswError">{formik.errors.pswField ? <div style={{color:'red'}}>{formik.errors.pswField}</div>: null}</div>
        <button id="submitBtn" type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
