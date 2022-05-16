import React from "react";
import { useState } from "react";
import { useSelectedCordenates } from "../../global/hook/selectedCordenates";
import { useSelectedWord } from "../../global/hook/SelectedWord";
import { useUserRow } from "../../global/hook/userRow";
import { tkgen } from "../../global/tokenGenerator/tokengen";
import { KeysContainer, KeyStyles } from "./styled";

function GameKeyboard(){
    const {SelectedCordenates, setSelectedCordenates} = useSelectedCordenates();
    const {UserRow, setUserRow} = useUserRow();
    const {SelectedWord, setSelectedWord} = useSelectedWord();
    const [userRowLetters , setuserRowLetters]= useState()

    async function click( key){
    if(SelectedCordenates[1]==4){
        var NextBlock = [ UserRow, 4]
    }
    else{
        var NextBlock = [ UserRow, (SelectedCordenates[1] + 1)]
    }
    if(key == '⌫'){
        document.getElementById('GradeData').children[SelectedCordenates[0]].children[SelectedCordenates[1]].innerHTML =""
        document.getElementById('GradeData').children[SelectedCordenates[0]].children[SelectedCordenates[1]].id ="" 
        var letraUsuario = document.createAttribute("letter").value = key
        document.getElementById('GradeData').children[SelectedCordenates[0]].children[SelectedCordenates[1]].setAttribute("letter" , "")
        var x =SelectedCordenates[0]
        var y = SelectedCordenates[1]
    }
    else{
        document.getElementById('GradeData').children[SelectedCordenates[0]].children[SelectedCordenates[1]].innerHTML =key
        document.getElementById('GradeData').children[SelectedCordenates[0]].children[SelectedCordenates[1]].id =key 
        var letraUsuario = document.createAttribute("letter").value = key
        document.getElementById('GradeData').children[SelectedCordenates[0]].children[SelectedCordenates[1]].setAttribute("letter" , key)
        
        setSelectedCordenates(NextBlock)
        var x = NextBlock[0]
        var y = NextBlock[1]
    }
    await document.getElementById('GradeData').children[x].children[(y)].classList.add("active")
    await document.getElementById('GradeData').children[(x)].children[(y -1)].classList.remove("active")

    }
    async function Check(){
        if(SelectedCordenates[1]==4){
            setUserRow((UserRow +1))
            var NextBlock = [ (UserRow + 1), 0]
        }
        else{
            var NextBlock = [ UserRow, (SelectedCordenates[1] + 1)]
        }
        await document.getElementById('GradeData').children[(SelectedCordenates[0])].children[SelectedCordenates[1]].classList.remove("active")
        await setSelectedCordenates(NextBlock)
        var datausergame=[]
        var palavrasorteada= SelectedWord
        var userRow=[
            document.getElementById('GradeData').children[UserRow].children[0].textContent,
            document.getElementById('GradeData').children[UserRow].children[1].textContent,
            document.getElementById('GradeData').children[UserRow].children[2].textContent,
            document.getElementById('GradeData').children[UserRow].children[3].textContent,
            document.getElementById('GradeData').children[UserRow].children[4].textContent
        ]
        for (var i = 0; i < 5; i++) {
            if(SelectedWord[i] == userRow[i]){
                document.getElementById('GradeData').children[UserRow].children[i].classList.add("correct")
            }
            else{
                var contador = 0;
                for(let a = 0; a < SelectedWord.length; a++){
                    if(SelectedWord[a] == userRow[i]){
                        contador = 1
                    }
                    else{
                        console.log("not found")
                    }
                }
                if(contador ==  1){
                    document.getElementById('GradeData').children[UserRow].children[i].classList.add("contem")
                }
            }
          }
          var newRow = UserRow + 1
          setUserRow(newRow)
          var x = NextBlock[0]
          var y = NextBlock[1]
        document.getElementById('GradeData').children[x].children[(y)].classList.add("active")
        document.getElementById('GradeData').children[(x)].children[(y -1)].classList.remove("active")
        }
    const keys = [
        'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
        'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'
    ]
    return(
        <>
        <KeysContainer>
            {keys.map ((data) => (
                <>
                <KeyStyles className={data + " " +" keyboardkey"} 
                    id={data}
                    value={data}
                    onClick={() => click(data)}
                    style={
                        {
                            width:(100/11)+"%"
                        }
                    }>
                        {data}
                </KeyStyles>
                </>
            ))}
            <KeyStyles onClick={() => Check() } > Enter</KeyStyles>
        </KeysContainer>
        </>
    )
}
export{
    GameKeyboard
}