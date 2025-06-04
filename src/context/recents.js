"use client";
import { createContext, useState, useContext } from "react";

const RecentsContext = createContext();

export function useRecents() {
  return useContext(RecentsContext);
}

export function RecentsProvider({ children }) {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const addRecents = (item) => {
    setRecentlyViewed (prev => {
        let updated = prev
        
        // Remove if already there, add it to the back after
        updated = updated.filter(i => i.id !== item.id)

        updated = [...updated, item]
        if (updated.length > 4) {
            updated.shift()
        }
        return updated
    })
  };

  return (
    <RecentsContext.Provider value={{ recentlyViewed, addRecents }}>
      {children}
    </RecentsContext.Provider>
  );
}



