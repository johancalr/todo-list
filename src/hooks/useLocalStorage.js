import React from "react";

function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName);
  const parsedItem       = JSON.parse(localStorageItem)??initialValue;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };

  const resetItem = (originalValue) => {
    saveItem(originalValue);
  };

  return [
    item,
    saveItem,
    resetItem
  ];
}

export { useLocalStorage };