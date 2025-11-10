import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import TopArt from '../TopArt/TopArt';

const Home = () => {
    const [topArts , setTopArts] = useState([])

    useEffect(() => {
    fetch('http://localhost:3000/topArt')
      .then((res) => res.json())
      .then((data) => setTopArts(data))
      .catch((error) => console.error('Error fetching topArt:', error));
  }, []);

    return (
        <div>
            <Banner></Banner>
            <div className='border-y-2 border-accent w-11/12 mx-auto'>
                <h1 className='text-center text-2xl font-bold my-3 text-accent'>Top Like ArtWork</h1>
            </div>
            <div className='w-11/12 my-10 mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    topArts.map(topArt => <TopArt key={topArt._id} topArt={topArt}></TopArt>)
                }
            </div>
        </div>
    );
};

export default Home;