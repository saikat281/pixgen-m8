import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoDownloadSharp } from 'react-icons/io5';

const PhotoCard = ({ photo }) => {


    return (
        <Card className='border rounded-xl p-6'>
            <div className='relative w-full aspect-square'>
                <Image
                    src={photo.imageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={photo.title}
                    className="object-cover rounded-xl"
                />
                <Chip className='absolute left-3 top-2 bg-blue-100 rounded-2xl px-2 font-medium'>{photo.category}</Chip>
            </div>
            
            <div>
                <h2 className='font-medium'>{photo.title}</h2>
            </div>
            <div className='flex items-center gap-6'>
                <div className='flex items-center gap-2'>
                    <p>
                        <FaHeart></FaHeart>
                    </p>
                    <p>{photo.likes}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <p>
                        <IoDownloadSharp />
                    </p>
                    <p>{photo.downloads}</p>
                </div>
            </div>

            <Button className="bg-blue-600 w-full rounded-2xl p-2 text-white cursor-pointer">View More</Button>

        </Card>
    );
};

export default PhotoCard;