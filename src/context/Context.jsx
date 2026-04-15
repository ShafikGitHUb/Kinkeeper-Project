import React, { createContext, useState } from 'react';

export const ContextProvider = createContext();

const Context = ({children}) => {
     const [showCallInfo, setShowCallInfo] = useState([]);
     const [showTextInfo, setShowTextInfo] = useState([]);
     const [showVideoInfo, setShowVideoInfo] = useState([]);

const handleCallbtn = (expectedCard) =>{
        
  const isExistCard = showCallInfo.find(callInfo => callInfo.id === expectedCard.id);
        
  if(isExistCard){
    alert("Already Card add");
  } else{
    setShowCallInfo([...showCallInfo,expectedCard]);
    alert("Add 1st time Call");
     return;
  }

};
    const handleTextbtn = (expectedCard) =>{
        
  const isExistCardText = showTextInfo.find(textInfo => textInfo.id === expectedCard.id);
  if(isExistCardText){
    alert("Already Text add");
  } else{
    setShowTextInfo([...showTextInfo,expectedCard]);
   alert("Add 1st time Text");
     return;
  }
  
};

const handleVideobtn = (expectedCard)=>{

    const isExitVideo = showVideoInfo.find(videoInfo => videoInfo.id === expectedCard.id);
    if(isExitVideo){
        alert("Already Video Addd");
    }
    else{
        setShowVideoInfo([...showVideoInfo,expectedCard]);
        alert("Add 1st time Video");
        return ;
    }
}


 


    return <ContextProvider.Provider value={{handleCallbtn,showCallInfo,showTextInfo,showVideoInfo,handleTextbtn,handleVideobtn}}>
        {children}
        </ContextProvider.Provider>
};

export default Context;