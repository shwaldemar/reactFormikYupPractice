import React, { useState } from 'react'

const BasicForm = () => {
  
  return (
    <div>
    <h1>Basic Form</h1>
      <form autoComplete='off'>
      <div>
        <label htmlFor="email">Email</label>
        <input  id="email" type="email" placeholder="Enter your email"/>
      </div>
      </form>
    </div>
  )
}

export default BasicForm;