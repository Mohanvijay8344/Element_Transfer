import React, { useState, useEffect } from "react";

const Infinite_Scroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadItems();
  }, [page]);

  const loadItems = () => {
    setLoading(true);
    setTimeout(() => {
      const newItems = Array.from({ length: 20 }, (_, i) => `Item ${i + 1 + (page - 1) * 20}`);
      setItems((prevItems) => [...prevItems, ...newItems]);
      setLoading(false);
    }, 1000); 
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight
      ) {
        setPage((prevPage) => prevPage + 1); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="font-bold text-3xl text-center">Infinite Scroll</h1>
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              margin: "10px 0",
              padding: "10px",
              background: "#f0f0f0",
              borderRadius: "5px",
            }}
          >
            {item}
          </div>
        ))}
      </div>
      {loading && <h3>Loading...</h3>}
    </div>
  );
};

export default Infinite_Scroll;
