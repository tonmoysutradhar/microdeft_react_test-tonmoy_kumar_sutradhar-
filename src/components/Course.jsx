import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Course = () => {
  const [course, setCourse] = useState({
    title: "",
    description: "",
    badge_text: "",
    badge_color: "",
    instructor_name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (token == null) {
      toast.error("Submission failed. Please log in first.");
      return;
    } else {
      const res = await fetch(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(course),
        }
      );
      const data = await res.json();
      console.log(data);
      toast.success("Successfully Submitted Course Form.");
    }
  };

  return (
    <div className="text-center w-80 mx-auto border-2 rounded-2xl bg-blue-50 p-8">
      <h2 className="mb-5 font-bold">Course Form</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <input
          type="text"
          placeholder="Title"
          required
          className="input input-bordered input-md w-full max-w-xs"
          onChange={(e) => setCourse({ ...course, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          required
          className="input input-bordered input-md w-full max-w-xs"
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Badge Text"
          required
          className="input input-bordered input-md w-full max-w-xs"
          onChange={(e) => setCourse({ ...course, badge_text: e.target.value })}
        />
        <input
          type="text"
          placeholder="Badge Color"
          required
          className="input input-bordered input-md w-full max-w-xs"
          onChange={(e) =>
            setCourse({ ...course, badge_color: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Instructor Name"
          required
          className="input input-bordered input-md w-full max-w-xs"
          onChange={(e) =>
            setCourse({ ...course, instructor_name: e.target.value })
          }
        />

        <button type="submit" className="btn btn-primary max-w-xs">
          Submit Course <ToastContainer></ToastContainer>
        </button>
      </form>
    </div>
  );
};

export default Course;
