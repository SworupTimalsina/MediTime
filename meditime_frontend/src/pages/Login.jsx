import React, { useState } from 'react'
const Login = () => {
    const [state,setState] = useState('Sign Up') 

    const [email,setEmail] = useState ('')
    const [password,setPassword] = useState ('')
    const [name,setName] = useState ('')

    const onSubmitHandler = async () => {
        event.preventDefault()
    }
    return (
   <form className='min-h-[80vh] flex items-center'>
    <div>
        <p>{state === 'Sign Up' ? "Create Account" : "Log In"}</p>
        <p>Please { state === 'Sign Up' ? "sign up" : "log in"} to book appointment.</p>
        <div>
            <p>Full Name</p>
            <input type="text" onChange={(e)=>setName(e.target.name)} value={name}/>
        </div>
    </div>

   </form>
    )
}

export default Login
