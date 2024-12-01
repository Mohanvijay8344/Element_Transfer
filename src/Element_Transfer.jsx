import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Element_Transfer() {
  const [bucket1, setBucket1] = useState(["Item 1", "Item 2", "Item 3","Item 4", "Item 5", "Item 6"]);
  const [bucket2, setBucket2] = useState(["Item 7", "Item 8"]);

  const [selectedItems, setSelectedItems] = useState([]);

  const addItem = () => {
    if(bucket1.length > 0 ) {
      if(selectedItems.length > 0) {
        const newBucket1 = bucket1.filter((_, index) => !selectedItems.includes(index));
      const newBucket2 = [...bucket2, ...bucket1.filter((_, index) => selectedItems.includes(index))];

      setBucket1(newBucket1);
      setBucket2(newBucket2);
      setSelectedItems([]);
        
      } else {
        alert("No items selected!");
      }
    } else {
      alert("Bucket 1 is empty!");
    }
    
  }

  const removeItem = () => {
    if(bucket1.length > 0){
      if(selectedItems.length > 0) {
        const newBucket1 = bucket1.filter((_, index) => !selectedItems.includes(index));
  
        setBucket1(newBucket1);
        setSelectedItems([]);

      } else {
        alert("No items selected!");
      }
    }
    else {
      alert("Bucket 1 is empty!");
    }
  }

  const addAll = () => {
    if(bucket1.length > 0){
      setBucket2([...bucket2,...bucket1]);
      setBucket1([]);
    } else {
      alert("Bucket 1 is empty!");
    }
  }

  const reset = () => {
    setBucket1(["Item 1", "Item 2", "Item 3","Item 4", "Item 5", "Item 6"]);
    setBucket2(["Item 7", "Item 8"]);
    setSelectedItems([]);
  }

  const removeAll = () => {
    if(bucket1.length > 0) {
      setBucket1([]);
    }
    else {
      alert("Bucket 1 is empty!");
    }
  }

  const handleItemClick = (item, index) => {
    const newSelectedItems = [...selectedItems]; 
    const itemIndex = newSelectedItems.indexOf(index); 

    if (itemIndex === -1) {
      newSelectedItems.push(index);
    } else {
      newSelectedItems.splice(itemIndex, 1);
    }

    setSelectedItems(newSelectedItems);
  };

  return (
    <div className="mt-5">
      <h1 className="text-center font-extrabold text-3xl">Element Transfer</h1>

      <div className="main_container">

        <div className="bucket1">
          <h1 className="text-2xl font-bold">Bucket 1</h1>
          <ul className="map">
            {bucket1.map((item, index) => (
              <li key={index} style={{
                backgroundColor: selectedItems.includes(index) ? "green" : "",
              }} onClick={() => handleItemClick(item, index)}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="btns">
          <button onClick={addItem}>Add</button>
          <button onClick={removeItem}>Remove</button>
          <button onClick={addAll}>Add All</button>
          <button onClick={removeAll}>Remove All</button>
          <button onClick={reset}>Reset</button>
        </div>

        <div className="bucket2">
        <h3 className="text-2xl font-bold">Bucket 2</h3>
          <ul className="map">
            {bucket2.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Element_Transfer;
