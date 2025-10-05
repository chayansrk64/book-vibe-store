import React from 'react';
import banner from '../../assets/banner.png'
const Banner = () => {
    return (
        <div className='flex justify-between items-center p-4 md:px-10 bg-[rgba(19, 19, 19, 0.05)]'>
            <div className='w-2/3'>
                <div className='flex flex-col w-2/3 mx-auto text-center'>
                    <h1 className='text-5xl mb-5'>Books to freshen up your bookshelf</h1>
                    <button className='btn btn-primary'>Read More</button>
                </div>
            </div>
            <div className='w-1/3'>
                <img className=' ' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;