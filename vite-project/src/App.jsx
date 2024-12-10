import React from "react";
import Forground from "./components/Forground";
import Background from "./components/Background";


const App = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      {/* <div className="fixed top-0 left-0 z-[3] w-ful  h-full "></div> */}
      <Forground />
    
    </div>
  );
};

export default App;
