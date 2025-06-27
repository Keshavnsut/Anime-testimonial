import React from "react";
import Testimonial from "./Components/Testimonial.jsx";
import reviews from "./data";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gradient-to-br from-red-500 via-rose-600 to-pink-500 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">- Legend Chronicles</h1>
        <div className="bg--800 h-[4px] w-1/5 mt-1 mx-auto"></div>
        <Testimonial reviews = {reviews}/>
      </div>
    </div>
  );
};

export default App;
