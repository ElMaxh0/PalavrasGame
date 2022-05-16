import React, { createContext, useContext, useState } from "react";
export const PalavrasContext = createContext();
export default function PalavrasProvider({children}){
    const[Palavras, setPalavras]= useState(['A','A','A','A','A','A'])
    return <PalavrasContext.Provider value={{Palavras,setPalavras}}>{children}</PalavrasContext.Provider>
}
export function usePalavras(){
    const context= useContext(PalavrasContext)
    const {Palavras, setPalavras} = context;
    return {Palavras, setPalavras}

}