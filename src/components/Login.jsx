import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    })

    const handleLogin = async (e)=> {
        e.preventDefault();
        if (credentials.password.length < 8) {
              toast.error("Password must be at least 8 characters long.");
              return;
        }

        try {
            const res = await fetch('https://react-interview.crd4lc.easypanel.host/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
            const data = await res.json();
            console.log(data);
            localStorage.setItem('token', data.data.token);
            toast.success('Login Successful');
        } catch (error) {
            toast.error('Please use a registered email to log in.')
            return ;
        }

        
    }

  return (
    <div className=" text-center">
      <h2 className="my-5 font-bold">Login Form</h2>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 border mx-auto">
        <form onSubmit={handleLogin} className="card-body fonb">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
            <ToastContainer></ToastContainer>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;