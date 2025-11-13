import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthContext";
import MyFavoriteCard from "./MyFavoriteCard";

const MyFavorit = () => {
  const { user } = use(AuthContext);
  const [favorite , setFavorites] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/favorites?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, [user.email]);


  return (
  <div>
    <h1 className="text-4xl text-accent text-center font-bold py-4">My Favorite Art</h1>
    <div>
        {
            favorite.map((fav , index) => <MyFavoriteCard key={fav.artId} index={index} fav={fav}></MyFavoriteCard>)
        }
    </div>
    </div>
)
};

export default MyFavorit;
