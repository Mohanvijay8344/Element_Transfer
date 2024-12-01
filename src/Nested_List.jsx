import React, { useState } from 'react'

function Nested_List() {

    const data = [
        {
          name: 'Applications',
          children: [
            { name: 'adam' },
            { name: 'ghost' }
          ]
        },
        {
          name: 'Documents',
          children: [
            { name: 'Word Documents',
              children: [
                { name: 'Report1.docx' },
                { name: 'Report2.docx' }
              ]
            },
            { name: 'PDF Documents',
              children: [
                { name: 'Paper1.pdf' },
                { name: 'Paper2.pdf' }
              ]
            }
          ]
        },
        {
          name: 'Music',
          children: [
            { name: 'Pop' },
            { name: 'Rock' },
            { name: 'Classical' }
          ]
        },
        {
          name: 'Videos',
          children: [
            { name: 'Movies',
              children: [
                { name: 'Action' },
                { name: 'Comedy' },
                { name: 'Drama' }
              ]
            },
            { name: 'TV Shows',
              children: [
                { name: 'Sci-Fi' },
                { name: 'Fantasy' },
                { name: 'Crime' }
              ]
            }
          ]
        },
        {
          name: 'Pictures',
          children: [
            { name: 'Family Photos' },
            { name: 'Travel Photos' },
            { name: 'Nature Photos' }
          ]
        }
      ];

      const [child2, setChild2] = useState([])
      const [child3, setChild3] = useState([])

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItems2, setSelectedItems2] = useState([])
  const [selectedItems3, setSelectedItems3] = useState([]);



  const handle_first_child = (index) => {
    setChild2(data[index].children); 
    
    const newSelectedItems = selectedItems.includes(index) ? selectedItems.filter((selectedItem) => selectedItem !== index) : [index]; 
    
    setSelectedItems(newSelectedItems);
    setChild3([]);
    setSelectedItems2([]);
  };


      const handle_secound_child = (index) => {
        setChild3(data[index].children);

        const newSelectedItems = selectedItems2.includes(index) ? selectedItems2.filter((selectedItem) => selectedItem !== index) : [index]; 
    
    setSelectedItems2(newSelectedItems);
    setSelectedItems3([])
      }

      const handle_third_child = (index) => {
        const newSelectedItems = selectedItems3.includes(index) ? selectedItems3.filter((selectedItem) => selectedItem !== index) : [index]; 

    setSelectedItems3(newSelectedItems);
      }

      
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='flex justify-center box-shadow-lg p-20 bg-gray-500 bg-auto font-semibold mt-10 rounded-lg w-[600px] '>
      <ul className="flex flex-col gap-2 ">
      {data?.map((item, index) => (
        <li
          key={index}
          className={`hover:border-black  cursor-pointer w-[150px] hover:border-b-2 px-2 py-1 rounded-md ${selectedItems.includes(index) ? 'bg-green-500 text-white' : ''}`}
          onClick={() => handle_first_child(index)}
        >
          {item.name}
        </li>
      ))}
    </ul>
      <ul className='flex flex-col gap-2'>
        {child2?.map((item, index) => (
            <li key={index} onClick={() => handle_secound_child(index)}
                className={`hover:border-black cursor-pointer w-[150px] hover:border-b-2 px-2 py-1 rounded-md ${selectedItems2.includes(index) ? 'bg-green-500 text-white' : ''}`}
>
                {item.name}
            </li>
        ))
        }
      </ul>
      <ul className='flex flex-col gap-2'>
        {
            child3?.map((item, index) => (
                <li key={index} 
                    className={`hover:border-black w-[150px] cursor-pointer hover:border-b-2 px-2 py-1 rounded-md ${selectedItems3.includes(index) ? 'bg-green-500 text-white' : ''}`}
                    onClick={() => handle_third_child(index)}
>
                    {item.name}
                </li>
            ))
        }
      </ul>
    </div>
    </div>
    
  )
}

export default Nested_List
