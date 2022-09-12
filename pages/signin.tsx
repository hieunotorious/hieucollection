import React, { useState } from 'react'
import { LoginType } from '../api/auth/models/user'


function Login() {
  const [user,setUser]=useState<LoginType>(
      {
        username : "",
        password : "",
      }
  )

  return (
   <div className='full-screen-container'>
     <div className='center'>
     <h1>Login</h1>
      <form onSubmit={(event) => {
          event.preventDefault()
          console.log(user)
      }}   >
      <div className="txtfield">
          <input type="text" onChange={(event) => {
            setUser((prevState ) => ({...prevState,username: event.target.value}))
          }} required></input>
            <label>Username</label>
        </div>

        <div className="txtfield">
          <input type="password" onChange={(event) => {
            setUser((prevState ) => ({...prevState,password: event.target.value}))
          }}required ></input>
            <label>Password</label>
        </div>

        <div className='pass'>Forgot Password ?</div>
        <input type='submit' value='login' ></input>
        <div className='signup_link'>
            Not a member? <a href='#'>Sign up</a>
        </div>
      </form>
       </div>

    </div>
  )
}

export default Login

