import React, { useState, useEffect } from "react";
import { TodoLoader } from "../TodoLoader";

function TodoLoading() {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const loaders = [
        { opacity: 25 },
        { opacity: 50 },
        { opacity: 75 },
        { opacity: 100 }
      ];
  
      if (visibleItems.length < loaders.length) {
        setVisibleItems([...visibleItems, loaders[visibleItems.length]]);
      }/*  else { // uncomment the "else" if want the animation to restar
        setVisibleItems([]);
      } */
    }, 180);
  }, [visibleItems]);

  return (
    <>
      {visibleItems.map((loader) => (
        <TodoLoader
          opacity={loader.opacity}
          key={loader.opacity}>
          Loading
        </TodoLoader>
      ))}
    </>
  );
}

export { TodoLoading };
