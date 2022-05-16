import React, { createContext, useContext, useState } from "react";
export const SelectedCordenatesContext = createContext();
export default function SelectedCordenatesProvider({children}){
    const[SelectedCordenates, setSelectedCordenates]= useState([0 ,0 ,1 ,1])
    return <SelectedCordenatesContext.Provider value={{SelectedCordenates,setSelectedCordenates}}>{children}</SelectedCordenatesContext.Provider>
}
export function useSelectedCordenates(){
    const context= useContext(SelectedCordenatesContext)
    const {SelectedCordenates, setSelectedCordenates} = context;

    return {SelectedCordenates, setSelectedCordenates}

}