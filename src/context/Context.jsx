import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const ContextProvider = createContext();

const Context = ({children}) => {
     const [showCallInfo, setShowCallInfo] = useState([]);
     const [showTextInfo, setShowTextInfo] = useState([]);
     const [showVideoInfo, setShowVideoInfo] = useState([]);


const handleCallbtn = (expectedCard) =>{
        
  const isExistCard = showCallInfo.find(callInfo => callInfo.id === expectedCard.id);
        
  if(isExistCard){
    toast.error("You have already called this person");
  } else{
    setShowCallInfo([...showCallInfo,expectedCard]);
   
     toast.success("Successfully called this person");
     return;
  }

};
    const handleTextbtn = (expectedCard) =>{
        
  const isExistCardText = showTextInfo.find(textInfo => textInfo.id === expectedCard.id);
  if(isExistCardText){
       toast.error("You have already text this person");
  } else{
    setShowTextInfo([...showTextInfo,expectedCard]);

   toast.success("Successfully text this person");
     return;
  }
  
};

const handleVideobtn = (expectedCard)=>{

    const isExitVideo = showVideoInfo.find(videoInfo => videoInfo.id === expectedCard.id);
    if(isExitVideo){
            toast.error("You have already video called this person");
    }
    else{
        setShowVideoInfo([...showVideoInfo,expectedCard]);
    
        toast.success("Successfully video called this person");
        return ;
    }
}


 


    return <ContextProvider.Provider value={{handleCallbtn,showCallInfo,showTextInfo,showVideoInfo,handleTextbtn,handleVideobtn,}}>
        {children}
        </ContextProvider.Provider>
};

export default Context;