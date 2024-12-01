import React, { useEffect, useState } from 'react'
import "./App.css"

function Hit_Game() {
  const [box, setBox] = useState(new Array(9).fill(null));
  const [activeBox, setActiveBox] = useState(null);
  const [score, setScore] = useState(0);
  const [timeOuts, setTimeOuts] = useState(60);

  const handleClick = (index) => {
    if(index === activeBox){
        setScore((prev) => prev + 5);
    } else {
        setScore((prev) => prev - 2.5);
    }
    
  }

 useEffect(() => {
    const interval = setInterval(() => {
        const randomIndex = Math.ceil(Math.random()*9)*1
        
        setActiveBox(randomIndex);

        setTimeout(() => setActiveBox(null), 1000);
    },1500)

    const timer = setInterval(() => {
        setTimeOuts((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
  
      return () => {
        clearInterval(interval);
        clearInterval(timer);
      };
 },[])


  const reset = () => {
    window.location.reload();
  }

  return (
    <div>
        <h1 className='text-center font-bold text-3xl mt-5 mb-2'>Hit Game</h1>
        <h1 className='text-center font-bold text-2xl'>Points: {score}</h1> 
        <h1 className='text-center font-bold text-2xl'>Time left: {timeOuts} secounds</h1>
        
        <div className='flex justify-center items-center m-10'>
        <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 100px)",
          gap: "10px",
        }}
      >
        {box.map((_, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              backgroundColor: index === activeBox ? "lightblue" : "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {index === activeBox && "Click Me!"}
          </div>
        ))}
      </div>
    </div>
      <div >

        <button onClick={() => reset()} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mx-auto block mb-10'>Restart</button>
        </div>
    </div>
    
  )
}

export default Hit_Game
