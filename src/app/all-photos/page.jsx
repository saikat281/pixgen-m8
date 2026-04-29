import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotosPage = async() => {
    const res = await fetch("https://pixgen-m8.vercel.app/data.json");
    const data = await res.json();
    return (
        <div className="max-w-7xl mx-auto mt-[60px]">
            <h1 className='text-4xl font-bold'>All Photos</h1>
            <div className=" grid grid-cols-4 gap-5 mt-[60px]">
                {
                    data.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }

            </div>
        </div>
    );
};

export default AllPhotosPage;