import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { FadeLoader } from 'react-spinners';

const FriendsDetails = () => {
    const {id} = useParams();
            const [friends, setFriends] = useState([]);
            const [loading,setLoading] = useState(true)
    
     useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch("/data.json");
            const data = await res.json();
            setFriends(data);
            setLoading(false);
           
        };
        fetchData();
     },[] );

     const expectedCard = friends.find((singleCard)=>singleCard.id == id);
    return (
        <div className="container mx-auto mt-10">
      {loading ? (
          <div className='flex justify-center items-center col-span-full h-[60vh]'>
            <FadeLoader />
          </div>

      ) : (
        
          
        <div className='flex justify-center items-center gap-4'>   
  <div className="w-1/2  items-center text-center space-y-4 ">

<div className='py-7 space-y-1  bg-amber-200 rounded-2xl'>
          <img
      src={expectedCard.picture}
      alt={expectedCard.name}
      className="rounded-full mx-auto" />
    <h2 className="font-semibold text-2xl">{expectedCard.name}</h2>
  <div className="badge badge-soft bg-[#CBFADB] p-3  rounded-full mr-1 ">
    {expectedCard.tags?.[0]}
  </div>
  <div className="badge badge-soft p-3 bg-[#CBFADB]  rounded-full ">
    {expectedCard.tags?.[1]}
  </div>
    <p className='text-[#64748B] text-[14px]'>"Former colleague, great mentor"</p> 
    <p className='text-[#64748B] text=[14px]'>Preferred:{expectedCard.email}</p>
</div>
<div className='bg-amber-200 rounded-2xl py-3'>
<p className='text-center'>Snooze 2 weeks</p>
</div>
<div className='bg-amber-200 rounded-2xl py-3'>
<p className='text-center'>Archive</p>
</div>
<div className='bg-amber-200 rounded-2xl py-3'>
<button className="text-red-600 hover:underline">
  Delete
</button>
</div>

  </div>  



  <div className='w-1/2 space-y-3 '>
  
<div className='rounded-2xl py-3'>

<div className='flex justify-center items-center gap-3'>
    <div className='bg-amber-200 px-5 py-8 text-center rounded-2xl'>
    <h2 className='font-bold text-3xl'>62</h2>
    <p className='text-[#64748B] text-[14px]'>Days Since Contact</p>
</div>
<div className='bg-amber-200 px-5 py-8 text-center rounded-2xl '>
     <h2 className='font-bold text-3xl'>62</h2>
    <p className='text-[#64748B] text-[14px]'>Days Since Contact</p>
</div>
<div className='bg-amber-200 px-5 py-8 text-center rounded-2xl'>
     <h2 className='font-bold text-3xl'>62</h2>
    <p className='text-[#64748B] text-[14px]'>Days Since Contact</p>
</div>
</div>



</div>


<div className='bg-amber-200 rounded-2xl py-3'>
<p className='text-center'>Archive</p>
</div>

<div className='bg-amber-200 rounded-2xl py-3'>
<h2 className='text-center'>Quick Check-In</h2>
<div className='flex justify-center items-center gap-2'>
    <button className="btn btn-soft">Default</button>
<button className="btn btn-soft">Default</button>
<button className="btn btn-soft">Default</button>
</div>
</div>

  </div>
          </div>
      )}

    </div>
    );
};

export default FriendsDetails;