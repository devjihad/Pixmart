import React from 'react';
import img1 from '../assets/font.png'
import img2 from '../assets/illustator.png'
import img3 from '../assets/presentation.png'
import img4 from '../assets/Social.png'
import img5 from '../assets/UI.png'

const Hero2 = () => {
    return (
        <div className='max-w-300 mx-auto my-10 flex gap-5'>
            <div>
                <img src={img1} alt=""  className='bg-blue-50 p-12 rounded-xl hover:bg-blue-100'/>
                <h3 className='text-center text-xl'>Fonts</h3>
            </div>

             <div>
                <img src={img2} alt=""  className='bg-blue-50 p-12 rounded-xl hover:bg-blue-100'/>
                <h3 className='text-center text-xl'>Illustrator</h3>
            </div>

             <div>
                <img src={img3} alt=""  className='bg-blue-50 p-12 rounded-xl hover:bg-blue-100'/>
                <h3 className='text-center text-xl'>Presentation</h3>
            </div>

             <div>
                <img src={img4} alt=""  className='bg-blue-50 p-12 rounded-xl hover:bg-blue-100'/>
                <h3 className='text-center text-xl'>Social Media</h3>
            </div>

             <div>
                <img src={img5} alt=""  className='bg-blue-50 p-12 rounded-xl hover:bg-blue-100'/>
                <h3 className='text-center text-xl'>UI Kits</h3>
            </div>
        </div>
    );
};

export default Hero2;