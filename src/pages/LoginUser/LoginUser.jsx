import React from 'react'
import './LoginUser.css'
import FormLogin from '../../components/FormLogin/FormLogin'

const LoginUser = () => {
  return (
    <div className="Login-background">
        <div className="align-middle">
            <FormLogin ></FormLogin>
        </div>
    </div>
  )
}

export default LoginUser