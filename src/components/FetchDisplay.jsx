import React, { useEffect, useState } from 'react';
import Card from './card';


const FetchDisplay = () => {
    const [courses, setCourses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    fetch("https://react-interview.crd4lc.easypanel.host/api/course", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.data.data);
        console.log(data.data.data);
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {
        courses.map( card => <Card card={card}></Card>)
        }
    </div>
  );
};

export default FetchDisplay;