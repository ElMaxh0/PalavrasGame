import React from "react";
import { useSyncExternalStore } from "react";
import { useState } from "react";
import { GameKeyboard } from "./Keyboard/keyboard";
import GameTable from "./TableGame/table";

export default function GameApp(){
    return(
        <>
        <div>
            <div style={{
                width:"100%",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <GameTable />
                <GameKeyboard />
            </div>
        </div>
        </>
    )
}