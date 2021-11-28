import React, { createContext, useContext, useReducer } from "react";
// Menyiapkan dataLayer
export const StateContext = createContext();

// Membungkus aplikasi dan memberikan data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Mengambil informasi dari data layer
export const useStateValue = () => useContext(StateContext);
