import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();  //prepares the dataLayer


//Wrap our app provide data 
export const StateProvider = ({ reducer, initalState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>

);

//pull info from data layer
export const useStateValue = () => useContext(StateContext);