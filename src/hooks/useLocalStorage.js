import React from "react";

function useLocalStorage(itemName, initialValue) {


  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        const parsedItem       = JSON.parse(localStorageItem)??initialValue;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        } else {
          setItem(parsedItem);
        }
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    }, 1500);
  }, [itemName]);

  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };

  const resetItem = (originalValue) => {
    saveItem(originalValue);
  };

  return {
    item,
    saveItem,
    resetItem,
    loading,
    error
  };
}

export { useLocalStorage };