import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { FadeLoader } from 'react-spinners';
import call from "../../assets/call.png";
import text from "../../assets/text.png";
import video from "../../assets/video.png";
import { ContextProvider } from '../../context/Context';

const FriendsDetails = () => {
    const {id} = useParams();
            const [friends, setFriends] = useState([]);
            const [loading,setLoading] = useState(true);
    
    
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

const {handleCallbtn,handleTextbtn,handleVideobtn} = useContext(ContextProvider);



    return (
        <div className="container mx-auto px-2 mt-10">
      {loading ? (
          <div className='flex justify-center items-center col-span-full h-[60vh]'>
            <FadeLoader />
          </div>

      ) : (
        
          
        <div className='flex flex-col md:flex-row  justify-center items-center gap-4'>   
  <div className="w-full md:w-1/2  items-center text-center space-y-4 ">

<div className='py-7 space-y-1  bg-[#F8FAFC] rounded-2xl'>
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
    <p className='text-[#64748B]  text=[14px] '>Preferred:{expectedCard.email}</p>
</div>
<div className='bg-[#F8FAFC] rounded-2xl py-3'>
<p className='text-center'>Snooze 2 weeks</p>
</div>
<div className='bg-[#F8FAFC] rounded-2xl py-3'>
<p className='text-center'>Archive</p>
</div>
<div className='bg-[#F8FAFC] rounded-2xl py-3'>
<button className="text-red-600 hover:underline">
  Delete
</button>
</div>

  </div>  
  <div className='w-full md:w-1/2 space-y-3 '>
  
<div className='rounded-2xl py-3'>

<div className='flex justify-between items-center gap-2'>
    <div className='bg-[#F8FAFC] px-5 py-8 text-center rounded-2xl w-[32%]'>
    <h2 className='font-bold text-3xl'>62</h2>
    <p className='text-[#64748B] text-[14px]'>Days Since Contact</p>
</div>
<div className='bg-[#F8FAFC] px-5 py-8 text-center rounded-2xl w-[32%] '>
     <h2 className='font-bold text-3xl'>62</h2>
    <p className='text-[#64748B] text-[14px]'>Days Since Contact</p>
</div>
<div className='bg-[#F8FAFC] px-5 py-8 text-center rounded-2xl w-[32%]'>
     <h2 className='font-bold text-3xl'>62</h2>
    <p className='text-[#64748B] text-[14px]'>Days Since Contact</p>
</div>
</div>
</div>


<div className='bg-[#F8FAFC] rounded-2xl py-3 flex justify-between items-center p-4 '>

<div>
<h2>Relationship Goal</h2>
<p>Connect every 30 days</p>
</div>
<div>
  <button className='btn rounded-2xl'>Edit</button>
</div>

</div>

<div className='bg-[#F8FAFC] rounded-2xl py-3'>
<h2 className='ml-4'>Quick Check-In</h2>
<div className='flex  justify-center items-center gap-2 mt-2 mb-2'>
    <button onClick={()=>handleCallbtn(expectedCard)} className="btn btn-soft p-4 lg:p-10 rounded-2xl"><img className='w-5' src={call} alt=""/><p>Call</p>
    </button> 
<button onClick={()=>handleTextbtn(expectedCard)} className="btn btn-soft p-4 lg:p-10 rounded-2xl"><img className='w-5' src={text} alt=""  /><p>text</p>
</button>
<button onClick={()=>handleVideobtn(expectedCard)} className="btn btn-soft p-4 lg:p-10 rounded-2xl"><img className='w-5' src={video} alt="" /><p>video</p>
</button>
</div>
</div>

  </div>
          </div>
      )}

    </div>
    );
};

export default FriendsDetails;