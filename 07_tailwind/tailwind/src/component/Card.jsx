import React from "react";

function Card(props) {
    console.log("props",props.username)
    console.log(props)
    
  return (
    
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        {props.btn}
      <img
        src="https://images.pexels.com/photos/30907753/pexels-photo-30907753/free-photo-of-charming-lisbon-street-with-historic-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          
        </span>
        <h2 className="text-xl font-semibold tracking-wide">
          {props.username}
        </h2>
      </div>
      <p className="text-gray-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        tempora ipsum soluta amet
      </p>
    </div>
  );
}

export default Card;
