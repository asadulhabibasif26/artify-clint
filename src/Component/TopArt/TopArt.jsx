import React, { use } from "react";

const TopArt = ({ topArt }) => {

    const {title , image , artist_name , category} = topArt;

  return (
    <div>
      <div className="card bg-gray-700 w-110 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-[300px] h-[300px] object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <div className="flex gap-3">
            <h2 className="card-title text-accent">{title}</h2>
            <div className="badge badge-outline badge-warning my-2">{category}</div>
          </div>
          <div>
            <h2 className=""><span className="font-bold text-accent">Artist:</span> {artist_name}</h2>
          </div>
          <div className="card-actions w-full">
            <button className="btn btn-outline btn-accent w-full">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopArt;
