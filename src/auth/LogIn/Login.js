import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const handleLogin=data=>{
       console.log(data)
    }
    return (
        <div className='h-[800px]  flex justify-center items-center'>
        <div className='w-96 p-7' >
        <h4 className='text-43l text-center '>Login</h4>
        <form onSubmit={handleSubmit(handleLogin)}>
  
      <div className="form-control w-full max-w-xs">
      
           <label className="label">
         <span className="label-text">Email</span>
              </label>
           <input type="email" {...register("email",{ required: "Email Address is required" })}   className="input input-bordered w-full max-w-xs" />
           {errors.email && <p className='text-red-600' role="alert ">{errors.email?.message}</p>}
           <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input type="password" {...register("password",{ required: "password is required",minLength:{value:8, message:"password should have more then 8 characters"}})}  aria-invalid={errors.password ? "true" : "false"}  className="input input-bordered w-full max-w-xs" />
       {errors.password && <p className='text-red-600' role="alert">{errors.password.message}</p>}
           <label className="label">
        <span className="label-text-alt">forgot password?</span>
        </label>
        </div>

  
  
  
  <input type="submit" value="Login"className='btn btn-primary w-full' />
</form>
<p>New user ?<Link className='text-primary' to="/signup"> Create an account?</Link></p>
<div className="divider">OR</div>
<button className='btn btn-outline w-full'>Log in with Google</button>
        </div>
        
    </div>
    );
};

export default Login;