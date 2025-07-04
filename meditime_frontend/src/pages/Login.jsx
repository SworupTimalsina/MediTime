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
    <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-x1 text-zinc-600 text-sm shado-lg'>
        <p className='text-2xl font-semibold'> {state === 'Sign Up' ? "Create Account" : "Log In"}</p>
        <p>Please { state === 'Sign Up' ? "sign up" : "log in"} to book appointment.</p>
        {
            state === "Sign Up" &&         <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.name)}valut={name} required/>
     </div>
        }

        <div className='w-full'>
                <p>Email</p>
                <input  className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setEmail(e.target.name)}valut={email} required/>
            </div >
        <div className='w-full'>
                <p>Password</p>
                <input  className='border border-zinc-300 rounded w-full p-2 mt-2' type="password" onChange={(e)=>setPassword(e.target.name)}valut={password} required/>
            </div>

            <button className='bg-primary text-white w-full py-2 mt-4 rounded-md text-base '>{state === 'Sign Up' ? "Create Account" : "Log In"}</button>
            {
                state === "Sign Up"
                ? <p> Already have and account? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'> Login here</span></p>
                : <p >Create a new account? <span onClick={()=>setState('Sign Up')} className='text-primary underline cursor-pointer'>Click Here</span> </p>
            }
      
    </div>

   </form>
    )
}

export default Login
