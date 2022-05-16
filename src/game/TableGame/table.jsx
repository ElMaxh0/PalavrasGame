import React from "react";
import LetterBoxRow from "./rows";
import './styles.css';

export default function GameTable(){
    var RowGameTableDiv = 0
    return(
        <>
        <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            backgroundColor:"rgb(30, 25, 45)",
        }}>
            <div style={{
                display:"flow",
                justifyContent:"center",

            }} id={
                RowGameTableDiv+"GradeData"
            }>
                <LetterBoxRow />
            </div>
        </div>
        </>
    )
}