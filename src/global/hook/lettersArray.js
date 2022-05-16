import React, { createContext, useContext, useState } from "react";
export const LettersContext = createContext();
export default function LettersProvider({children}){
    const[Letters, setLetters]= useState(['A','A','A','A','A','A'])
    return <LettersContext.Provider value={{Letters,setLetters}}>{children}</LettersContext.Provider>
}
export function useLetters(){
    const context= useContext(LettersContext)
    const {Letters, setLetters} = context;
    return {Letters, setLetters}

}