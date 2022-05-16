import React, { createContext, useContext, useState } from "react";
export const UserRowContext = createContext();
export default function UserRowProvider({children}){
    const[UserRow, setUserRow]= useState(0)
    return <UserRowContext.Provider value={{UserRow,setUserRow}}>{children}</UserRowContext.Provider>
}
export function useUserRow(){
    const context= useContext(UserRowContext)
    const {UserRow, setUserRow} = context;

    return {UserRow, setUserRow}

}