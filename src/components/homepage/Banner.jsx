import React from 'react';

const Banner = () => {
    return (
        <div className=' container mx-auto px-2'>
       <div className='text-center mt-8 spacy-y-2 md:space-y-4'>
             <h2 className=' text-2xl font-bold md:text-3xl font-bold'>Friends to keep close in your life</h2>
            <p className='text-[#64748B] md:max-w-[50%] mx-auto'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
       </div>
   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      <div className="bg-[#F1F5F9] rounded-xl  py-4 px-2 text-center">
        <h3 className="text-2xl font-bold text-[#244D3F]">10</h3>
        <p className="text-sm text-gray-500 mt-1">Total Friends</p>
      </div>

      <div className="bg-[#F1F5F9] rounded-xl py-4 px-2 text-center">
        <h3 className="text-2xl font-bold text-[#244D3F]">3</h3>
        <p className="text-sm text-gray-500 mt-1">On Track</p>
      </div>

      <div className="bg-[#F1F5F9] rounded-xl py-4 px-2 text-center">
        <h3 className="text-2xl font-bold text-[#244D3F]">6</h3>
        <p className="text-sm text-gray-500 mt-1">Need Attention</p>
      </div>

      <div className="bg-[#F1F5F9] rounded-xl py-4 px-2  text-center">
        <h3 className="text-2xl font-bold text-[#244D3F]">12</h3>
        <p className="text-sm text-gray-500 mt-1">Interactions This Month</p>
      </div>

    </div>
        </div>
    );
};

export default Banner;