import React from 'react'
import './signup.css'

function Signup() {
  const handleSubmit = () => {

  }

  return (
    <div className='signup'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>ID:
          <input type="text" name="id" id="id" />
        </label>
        <label>Password:
          <input type="text" name='pw' id='pw' />
        </label>
        <input type="submit" value="Submit" className='button'/>
      </form>

      <div className='otherButtons'>
        <input className='button' value="Forgot password?"/>
        <input className='button' value="Create account"/>
      </div>
      
      <p className='copy specificCopy'>&copy;2023 by Sopum</p>
    </div>
  )
}

export default Signup