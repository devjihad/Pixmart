import React from 'react';
import banner from '../assets/herobanner.jpg'
import left from '../assets/heroleft.png'
import right from '../assets/heroright.jpg'
const Hero = () => {
    return (
        <div className='max-w-300 mx-auto'>
            <h3 className='text-6xl text-center font-semibold my-5 leading-18'>Unleash Your Creativity <br /> to Utmost <span className='text-blue-500'>Potential</span> with Us</h3>
            <p className='text-center'>Discover the building blocks of your next masterpiece: premium digital assets at your fingertips.</p>
            <div className='my-5 flex justify-center'>
                <input type="text" name="" id=""  className='w-120 text-xl p-5 border-0 outline-0 bg-gray-200 rounded-xl' placeholder='find fonts, template'/>
                <button className='text-xl p-5 border-0 outline-0 bg-blue-500 rounded-xl text-white'>Search now</button>
            </div>

            <div className='mt-10 relative'>
                <img src={banner} alt="" className='rounded-xl'/>
                <img src={left} alt="" className='h-50 w-100 absolute top-120 -right-30  opacity-75' />
                <img src={right} alt="" className='h-100 absolute top-50 -left-30 rounded-xl opacity-75'  />
            </div>

        </div>
    );
};

export default Hero;