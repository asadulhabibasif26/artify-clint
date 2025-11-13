import React, { useEffect, useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { useParams } from "react-router";

const ArtDetails = () => {
  const [artDetail, setArtDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/artDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setArtDetail(data))
      .catch((error) => console.error("Error fetching topArt:", error));
  }, [id]);

  const { image, title, category, medium, likes, artist_email, artist_name ,date_added} =
    artDetail;

  const date = date_added?.split("T")[0];

  return (
    <div className="md:flex items-center bg-base-100 shadow-sm w-10/12 mx-auto justify-center">
      <figure className="">
        <img className="max-h-[500px] object-cover" src={image} alt="Movie" />
      </figure>
      <div>
        <div className="card-body">
          <div className="border-2 border-accent py-8 px-4 rounded-2xl bg-gray-600">
            <div>
              <h2 className="card-title text-4xl font-bold text-accent">
                {title}
              </h2>
              <h2>
                <div className="badge badge-soft badge-accent">{date}</div>
              </h2>
            </div>
            <div className="md:flex items-center md:gap-20 justify-between py-3">
              <h2 className="btn btn-accent text-white">
                Category: {category}
              </h2>
              <h2 className="btn btn-accent text-white">Medium : {medium}</h2>
            </div>
          </div>
          <div className="border-2 border-accent py-8 px-4 rounded-2xl bg-gray-600">
            <h1 className="text-center text-xl font-bold text-accent">
              Artist Details
            </h1>
            <div className="py-2 md:flex items-center gap-5">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                  <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  Artist Name :{" "}
                  <span className="text-accent">{artist_name}</span>
                </h2>
                <h2 className="text-xl font-bold">
                  Artist Email :{" "}
                  <span className="text-accent">{artist_email}</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="card-actions justify-center">
            <button className="btn py-4 btn-primary text-2xl">
              <BiSolidLike />
              {likes}
            </button>
            <button className="btn py-4 btn-primary text-4xl">
              <FcLike />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtDetails;
