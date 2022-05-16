import React, { createContext, useContext, useState } from "react";
export const PageContentContext = createContext();
export default function PageContentProvider({children}){
    const[PageContent, setPageContent]= useState(2)
    return <PageContentContext.Provider value={{PageContent,setPageContent}}>{children}</PageContentContext.Provider>
}
export function usePageContent(){
    const context= useContext(PageContentContext)
    const {PageContent, setPageContent} = context;
    return {PageContent, setPageContent}

}