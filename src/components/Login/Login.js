import React, { useContext } from 'react'
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/UserContext'

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {signIn, googleSignIn} = useContext(AuthContext);


    const from = location.state?.from?.pathname || '/';


    const handleSubmit = (event)=>{ 
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            form.reset()
            console.log(user);
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.error(error)
        })
    }

    const handleGoogle = ()=>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate('/shop')
        })
        .catch(error => console.error(error))
    }

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Please Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <Link to="/register" className="label-text-alt link link-hover">Don't have an account? <small>register now!!!</small></Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
          <button className="btn btn-warning" onClick={handleGoogle}>Google</button>
      </form>
    </div>
  </div>
</div>
  )
}

export default Login