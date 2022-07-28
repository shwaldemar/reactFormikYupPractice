import React from 'react'
import { useFormik } from 'formik';

const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: values => alert(JSON.stringify(values, null, 2)),
  })
  console.log(formik);
  return (
    <div>
    <h1>Basic Form</h1>
      <form autoComplete='off' onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input 
        value={formik.values.email} 
        onChange={formik.handleChange}
        id="email" 
        type="email" 
        placeholder="Enter your email"/>
      </div>
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default BasicForm;