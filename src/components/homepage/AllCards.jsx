import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FadeLoader } from 'react-spinners';

const AllCards = () => {
        const [friends, setFriends] = useState([]);
        const [loading,setLoading] = useState(true)

 useEffect(()=>{
    const fetchData = async()=>{
        const res = await fetch("/data.json");
        const data = await res.json();
        setFriends(data);
        setLoading(false)
       
    };
    fetchData();
 },[] );
    return (
        <div className='mt-10 container mx-auto px-3'>
            <h2 className='ml-4'>Your Frieds</h2>
            <div className='grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
               
    
    { loading ? (
          <div className='flex justify-center items-center col-span-full h-[60vh]'>
            <FadeLoader />
          </div>

      ):(    friends.map(friend =>
       <Link key={friend.id} to={`/friend/${friend.id}`} className="mt-8 card bg-base-100 lg:w-70 md:w-85 w-90 
       container mx-auto shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={friend.picture}
      alt={friend.name}
      className="rounded-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{friend.name}</h2>
    <p className='text-[#244D3F]'>{friend.days_since_contact}d ago</p>
<div className='flex items-center justify-center flex-wrap gap-2'>
  <div className="badge badge-soft bg-[#CBFADB] p-3  rounded-full ">
    {friend.tags?.[0]}
  </div>

  <div className="badge badge-soft p-3 bg-[#CBFADB]  rounded-full ">
    {friend.tags?.[1]}
  </div>
</div>
    <div className={`badge badge-soft p-4 rounded-full ${friend.status == "overdue"? "bg-[#244D3F] text-white": friend.status =="almost due"?"bg-[#EFAD44] text-white": "bg-[#EF4444] text-white"}`} >{friend.status}</div>
  </div>
</Link> ))
               
                }
            </div>
        </div>
    );
};

export default AllCards;