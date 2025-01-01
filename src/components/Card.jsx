import React from "react";
import { CgProfile } from "react-icons/cg";

const Card = ({ card }) => {
  console.log(card);
  const { image, instructor_name, title, description,badge_color} = card;

  return (
    <div>
      <div className="relative card border rounded-xl bg-purple-50 shadow-xl">
        <figure className="">
          <img className="w-full" src={image} alt="" />
        </figure>
        <p className="absolute bottom-36 left-2 p-2 bg-red-400 rounded-sm">{badge_color}</p>
        <div className="px-5 pb-5 ">
          <div className="flex items-center justify-center gap-2">
            <CgProfile></CgProfile>
            {instructor_name}
          </div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-xl mb-3">{description}</p>
          <div className="text-center">
          <button className="btn btn-wide ">View Details</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
