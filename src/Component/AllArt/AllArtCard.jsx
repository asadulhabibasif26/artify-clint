import React from "react";
import { Link } from "react-router";

const AllArtCard = ({ art }) => {
  const { image, title, category, artist_name , _id } = art;
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
            <div className="badge badge-outline badge-warning my-2">
              {category}
            </div>
          </div>
          <div>
            <h2 className="">
              <span className="font-bold text-accent">Artist:</span>{" "}
              {artist_name}
            </h2>
          </div>
          <div className="card-actions w-full">
            <Link className="w-full" to={`/artDetails/${_id}`}>
              <button className="btn btn-outline btn-accent w-full">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllArtCard;
