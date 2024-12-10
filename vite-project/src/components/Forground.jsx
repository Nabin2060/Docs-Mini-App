import React, { useState,useRef } from "react";
import Card from "./Card";


const Forground = () => {

    const ref=useRef(null);
  const data = [
    {
      desc: "This card is the default card  for the game that    will be created    in the game",
      filesize: ".9mb",
      close: true,
      tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
    },
    {
        desc: "This card is the default card  for the game that    will be created    in the game",
        filesize: ".9mb",
        close: true,
        tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
      },
      {
        desc: "This card is the default card  for the game that    will be created    in the game",
        filesize: ".9mb",
        close: true,
        tag:{isOpen:true,tagTitle:"upload",tagColor:"green"},
      },
  ];

  return (
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
        ))}
      </div>
  );
};

export default Forground;
