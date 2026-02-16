import React from 'react';

const Spotlight = () => {
    return (
        <div className='bg-blue-50 '>
           <div className='max-w-300 mx-auto pt-7'>
             <h3 className='text-4xl font-semibold'>Spotlight Digital Assets Selections</h3>

            <div className='mt-10'>
                <div className='h-100 w-100 bg-white rounded-xl p-5 '>
                    <div className='h-75 bg-gray-200  rounded-xl'>

                    </div>
                    <div className='flex justify-center'>
                        <p>Flexsoul </p>
                        <button className='p-3 bg-blue-500 text-white'>$50</button>
                    </div>

                </div>
            </div>

           </div>
        </div>
    );
};

export default Spotlight;