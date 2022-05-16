import React, { createContext, useContext, useState } from "react";
export const SelectedWordContext = createContext();
export default function SelectedWordProvider({children}){
    const[SelectedWord, setSelectedWord]= useState(['A','L','A', 'N', 'A'])
    return <SelectedWordContext.Provider value={{SelectedWord,setSelectedWord}}>{children}</SelectedWordContext.Provider>
}
export function useSelectedWord(){
    const context= useContext(SelectedWordContext)
    const {SelectedWord, setSelectedWord} = context;
    return {SelectedWord, setSelectedWord}

}