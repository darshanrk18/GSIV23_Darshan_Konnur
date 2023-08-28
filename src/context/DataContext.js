import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();
const useDataContext = () => useContext(DataContext);

const DataContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <DataContext.Provider value={{ searchResults, setSearchResults, searchQuery, setSearchQuery }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider, useDataContext };
