import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthContext";
import { HiH1 } from "react-icons/hi2";
import MyGalleryCard from "./MyGalleryCard";

const MyGallery = () => {
  const { user } = use(AuthContext);
  const [arts, setArts] = useState([]);
  const email = user.email;
  useEffect(() => {
          fetch(`http://localhost:3000/myart?email=${email}`)
            .then((res) => res.json())
            .then((data) => setArts(data))
            .catch((error) => console.error('Error fetching topArt:', error));
        }, [email]);
  return (
    <div>
      <h1 className="text-center text-accent text-4xl py-4 font-bold">My All Art </h1>
      <div className="w-10/12 mx-auto">
        {
            arts.map((art , index) => <MyGalleryCard key={art._id} index={index} art={art}></MyGalleryCard>)
        }
      </div>
    </div>
  );
};

export default MyGallery;
