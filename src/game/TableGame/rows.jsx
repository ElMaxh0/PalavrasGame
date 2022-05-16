import React from "react";
import { useSelectedCordenates } from "../../global/hook/selectedCordenates";
import { useUserRow } from "../../global/hook/userRow";
import { LetterBoxStyled, LetterRowStyled } from "./styled";
import './styles.css';
export default function LetterBoxRow(){
    const {SelectedCordenates, setSelectedCordenates} = useSelectedCordenates();
    const {UserRow, setUserRow} = useUserRow();
    let LetterBoxId=0;
    function Selected([x , y]){

        if(x == UserRow ){
            document.getElementById('GradeData').children[SelectedCordenates[0]].children[SelectedCordenates[1]].classList.remove("active")
            setSelectedCordenates([ x, y ])
            document.getElementById('GradeData').children[x].children[y].classList.add("active")
    
        }
        else{
            alert("Voce Não Pode Alterar Este Campo Agora ")
        }

    }
    return(
        <>
        <div id={"GradeData"}>
            <LetterRowStyled >
                <LetterBoxStyled onClick={() => Selected([ 0, 0])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([ 0 , 1])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([ 0 , 2])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([ 0 , 3])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([ 0 , 4])}>
                    
                </LetterBoxStyled>
            </LetterRowStyled >
            <LetterRowStyled >
                <LetterBoxStyled onClick={() => Selected([ 1 , 0])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([ 1 , 1])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([ 1 , 2])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([ 1 , 3])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([ 1 , 4])}>
                    
                </LetterBoxStyled>
            </LetterRowStyled >
            <LetterRowStyled >
                <LetterBoxStyled onClick={() => Selected([ 2 , 0])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([ 2 , 1])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([ 2 , 2])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([2 , 3])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([ 2 , 4])}>
                    
                </LetterBoxStyled>
            </LetterRowStyled >
            <LetterRowStyled >
                <LetterBoxStyled onClick={() => Selected([ 3 , 0])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([ 3 , 1])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([ 3, 2])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([ 3, 3])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([ 3 , 4])}>
                    
                </LetterBoxStyled>
            </LetterRowStyled >
            <LetterRowStyled >
                <LetterBoxStyled onClick={() => Selected([ 4 , 0])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([ 4 , 1])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([ 4 , 2])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([ 4 , 3])}>
                    
                </LetterBoxStyled>
                <LetterBoxStyled onClick={() => Selected([4 , 4])}>
                    
                </LetterBoxStyled>
            </LetterRowStyled >
        </div>
        </>
    )
}
