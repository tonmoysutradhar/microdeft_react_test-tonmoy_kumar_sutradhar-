import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    try {
      const res = await fetch('https://react-interview.crd4lc.easypanel.host/api/register',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
            },
           body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      console.log(data);

      if(res.ok) {
        toast.success("Registration successful");
      }
    } 
    catch (error) {
      toast.error('This email is already registered. Please use a different email.');
      return;
    }
  }


  return (
    <div className=" text-center">
      <h2 className="my-5 font-bold">Registration Form</h2>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 border mx-auto">
        <form onSubmit={handleSubmit} className="card-body fonb">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

export default Registration;
