import React, { useState } from 'react'

function Box_Split() {
    const [box, setBox] = useState([{id:1, x:0, y:0, size: 400}]);

    const handleBoxClick = (box) => {
        const newSize = box.size / 2;

        const newBox = [
            {id: Date.now(), x: box.x, y: box.y, size: newSize},
            {id: Date.now()+1, x: box.x + newSize, y: box.y, size: newSize},
            {id: Date.now()+2, x: box.x, y: box.y + newSize, size: newSize},
            {id: Date.now()+3, x: box.x + newSize, y: box.y + newSize, size: newSize},
        ];

        setBox((prev) => [...prev.filter((b) => b.id !== box.id), ...newBox])
    }

    const handleReset = () => {
        setBox([{id:1, x:0, y:0, size: 400}]);
    }

  return (
    <div>
        <h1 className='text-center text-3xl font-bold mt-5'>Box Split</h1>
    <div className='relative w-[400px] h-[400px] border-2 border-black mx-auto mt-10 m-auto overflow-hidden'>
        {
            box.map((box) => (
                <div key={box.id} 
                className='absolute bg-blue-400 border border-black cursor-pointer' style={{width: box.size, height: box.size, left: box.x, top: box.y}} 
                onClick={() => handleBoxClick(box)}>

                </div>

            ))
        }
    </div>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mx-auto block mb-10' onClick={() => handleReset()}>Reset</button>
    </div>
  )
}

export default Box_Split
