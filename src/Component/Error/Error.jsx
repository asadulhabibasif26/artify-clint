import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='h-screen bg-[#8C52FF]'>
            <img className='mx-auto' src="https://seocom.agency/wp-content/uploads/2024/05/Errores-Web-404-403-503-502-401.-Significado-y-soluciones-1.jpg" alt="" />
            <div className='flex justify-center'>
                <Link to='/'><button className='btn btn-accent'>Back To Home</button></Link>
            </div>
        </div>
    );
};

export default Error;