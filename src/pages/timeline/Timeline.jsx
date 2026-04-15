import React, { useContext } from 'react';
import { ContextProvider } from '../../context/Context';

const Timeline = () => {

    const {showCallInfo,showTextInfo,showVideoInfo}= useContext(ContextProvider);
    
    return (
        <div className='container mx-auto px-2 mt-15 space-y-4'>
            <h1 className='font-bold text-4xl'>Timeline</h1>
            {showCallInfo.map((item) => (
      <div key={item.id} className='bg-[#F8FAFC] p-4 rounded-2xl'>
        <h2><span className='font-semibold'>Call With</span> {item.name}</h2>
        <p>March 29, 2026</p>
      </div>
    ))}

            {showTextInfo.map((item) => (
      <div key={item.id} className='bg-[#F8FAFC] p-4 rounded-2xl'>
        <h2><span className='font-semibold'>Text With</span> {item.name}</h2>
        <p>March 29, 2026</p>
      </div>
    ))}
{
    showVideoInfo.map((item)=>(
        <div key={item.key} className='bg-[#F8FAFC] p-4 rounded-2xl'>
            <h2><span className='font-semibold'>Video With</span> {item.name}</h2>
            <p>March 29, 2026</p>
        </div>
        
    ))
}



        </div>
    );
};

export default Timeline;