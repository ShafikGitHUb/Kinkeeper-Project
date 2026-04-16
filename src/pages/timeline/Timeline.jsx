import React, { useContext, useEffect, useState } from 'react';
import { ContextProvider } from '../../context/Context';

const Timeline = () => {

  const {
    showCallInfo,
    showTextInfo,
    showVideoInfo,
  } = useContext(ContextProvider);


  const [sorting, setSorting] = useState("");


  const [filteredData, setFilteredData] = useState({
    call: [],
    text: [],
    video: []
  });


  useEffect(() => {

 
    if (sorting === "") {
      setFilteredData({
        call: showCallInfo,
        text: showTextInfo,
        video: showVideoInfo,
      });
    }


    else if (sorting === "call") {
      setFilteredData({
        call: showCallInfo,
        text: [],
        video: []
      });
    }


    else if (sorting === "text") {
      setFilteredData({
        call: [],
        text: showTextInfo,
        video: []
      });
    }


    else if (sorting === "video") {
      setFilteredData({
        call: [],
        text: [],
        video: showVideoInfo
      });
    }

  }, [sorting, showCallInfo, showTextInfo, showVideoInfo]);

  const isEmpty =
    showCallInfo.length === 0 &&
    showTextInfo.length === 0 &&
    showVideoInfo.length === 0;

  return (
    <div className='container mx-auto px-2 mt-15 space-y-4'>

      <h1 className='font-bold text-4xl'>Timeline</h1>


      <div className="dropdown dropdown-right dropdown-center">
        <div tabIndex={0} role="button" className="btn m-1">
          Select ➡️
        </div>

        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">

  
          <li onClick={() => setSorting("")}><a>All</a></li>

  
          <li onClick={() => setSorting("call")}><a>Call</a></li>

       
          <li onClick={() => setSorting("text")}><a>Text</a></li>

          <li onClick={() => setSorting("video")}><a>Video</a></li>

        </ul>
      </div>

      {
        isEmpty ? (
          <div className='h-[50vh] bg-gray-100 flex justify-center items-center'>
            <h2 className='text-2xl font-bold'>
              No Data Available
            </h2>
          </div>
        ) : (
          <>
          
            {filteredData.call.map(item => (
              <div key={item.id} className='bg-[#F8FAFC] p-4 rounded-2xl'>
                <h2><b>Call With</b> {item.name}</h2>
              </div>
            ))}


            {filteredData.text.map(item => (
              <div key={item.id} className='bg-[#F8FAFC] p-4 rounded-2xl'>
                <h2><b>Text With</b> {item.name}</h2>
              </div>
            ))}

            {filteredData.video.map(item => (
              <div key={item.id} className='bg-[#F8FAFC] p-4 rounded-2xl'>
                <h2><b>Video With</b> {item.name}</h2>
              </div>
            ))}
          </>
        )
      }

    </div>
  );
};

export default Timeline;