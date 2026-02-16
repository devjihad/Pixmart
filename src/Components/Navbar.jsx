import React from 'react';
import img1 from '../assets/Profile Login.png'
import img2 from '../assets/Cart Button.png'
const Navbar = () => {
    return (
        <div className='flex max-w-300 mx-auto  justify-between items-center py-5'>
            <div className='flex gap-5'>
                <h3 className='text-2xl font-semibold text-blue-500'>Pixmart</h3>
                <ul className='flex gap-3 items-center'>
                <li>About </li>
                <li>Product</li>
                <li>Creator</li>
                <li>Blog</li>
                <li>Contact</li>
                </ul>
            </div>
            <div className='flex gap-5'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />


            </div>
        </div>
    );
};

export default Navbar;