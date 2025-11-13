import React, { useEffect, useState } from 'react';
import AllArtCard from './AllArtCard';
import { Link } from 'react-router';

const AllArt = () => {
    const [arts , setArts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/allart')
          .then((res) => res.json())
          .then((data) => setArts(data))
          .catch((error) => console.error('Error fetching topArt:', error));
      }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-11/12 gap-10 my-20 '>
          <div className='border-2 border-accent p-15 rounded-2xl w-110'>
            <h3 className='text-4xl text-accent mb-2'>All Artwork In Here</h3>
            <h3>Total ArtWork : {arts.length}</h3>
            <h2 className='text-3xl text-accent mt-4'>You Also Add Your ArtWork in There</h2>
            <Link to='/addArt'><button className='btn btn-outline btn-accent py-10 px-10 text-xl mt-5'>Want To Add My ArtWork</button></Link>
          </div>
            {
              arts.map((art) => <AllArtCard key={art._id} art={art}></AllArtCard>)  
            }
        </div>
    );
};

export default AllArt;