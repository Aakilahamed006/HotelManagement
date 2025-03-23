import React, { createContext, useState, useContext } from 'react';

// Create the Context
export const DateContext = createContext();

// Create a custom hook to use the DateContext
export const useDateContext = () => {
  return useContext(DateContext);
};

// Create a provider component
export const DateProvider = ({ children }) => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  return (
    <DateContext.Provider value={{ checkInDate, setCheckInDate, checkOutDate, setCheckOutDate }}>
      {children}
    </DateContext.Provider>
  );
};
