import React from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyFavoriteCard = ({ fav, index }) => {
  const { image, title, artId , _id} = fav;

  console.log(_id)
  const handelFavoriteDelete = (_id) => {
    Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:3000/favorites/${_id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                  window.location.reload()
                }
              });
          }
        });
  }
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
            <button onClick={()=> handelFavoriteDelete(_id)} className="text-xl text-red-600 btn btn-outline btn-accent">
              <MdDelete />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyFavoriteCard;
