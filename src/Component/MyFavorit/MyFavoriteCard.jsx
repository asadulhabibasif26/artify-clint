import React from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";

const MyFavoriteCard = ({ fav, index }) => {
  const { image, title, artId } = fav;
  return (
    <div>
      <div>
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">
              0{index + 1}
            </div>
            <div>
              <img className="size-10 rounded-box" src={image} />
            </div>
            <div className="list-col-grow">
              <div className="text-xl text-accent font-bold">{title}</div>
            </div>
            <div className="card-actions">
              <Link className="w-full" to={`/artDetails/${artId}`}>
                <button className="btn btn-outline btn-accent w-full">
                  View Details
                </button>
              </Link>
            </div>
            <button className="text-xl text-red-600 btn btn-outline btn-accent">
              <MdDelete />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyFavoriteCard;
