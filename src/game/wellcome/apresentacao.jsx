import React from "react";
import { usePageContent } from "../../global/hook/page";
import { useSelectedCordenates } from "../../global/hook/selectedCordenates";
import { tkgen, tkgenum } from "../../global/tokenGenerator/tokengen";
import LetterBoxRow from "../TableGame/rows";
import { LetterBoxStyled, LetterRowStyled } from "../TableGame/styled";
import { ButtonsStyles } from "./buttons";
import './buttonsCSS.css'

function Wellcome(){
    const {SelectedCordenates, setSelectedCordenates} = useSelectedCordenates();
    const {PageContent, setPageContent}= usePageContent()

    function startGame(){
        setPageContent(2)
    }
    return(
        <>
        <div>
            <div>
                <div style={{
                    width:"100%",
                    display:"block",
                    justifyContent:"center",
                    backgroundColor:"rgb(30, 25, 45)",
                    color:"rgb(255,255,255)",
                    flexDirection:"collum",
                    
                }}>
                    <div style={{
                    }}>
                        <h1>PalavraGame</h1>
                    </div>
                    <div style={{
                        padding:"1%",
                    }}>
                        <h3>Introduzindo o Game </h3>
                        <p> Este game é um desafio já comum na internet que consiste em voce tentar descobrir a palavra misteriosa com apenas 5 tentativas 
                        estimulando voce a criar estrategias 
                        </p>
                        <div style={{
                            padding:"1%",
                        }}>
                                <div style={{
                                display:"block",
                                alignContent:"left",
                                justifyContent:"left",
                                textAlign:"left",
                                backgroundColor:"rgb(130, 225, 125)",
                                borderRadius:"25px",
                                padding:"3%",
                                marginTop:"1%",
                            }}>
                                Letra Correta :
                                Se a letra ficar na coloração verde após clicar no enter significa que esta letra esta em seu correto posicionamento 
                                <LetterRowStyled style={{
                                    marginLeft:"auto",
                                    marginRight:"auto"
                                }}>
                                    <LetterBoxStyled>B</LetterBoxStyled>
                                    <LetterBoxStyled>I</LetterBoxStyled>
                                    <LetterBoxStyled className={"correct"+" "+tkgen(180) +" "+ tkgenum(699) }>O</LetterBoxStyled>
                                    <LetterBoxStyled>L</LetterBoxStyled>
                                    <LetterBoxStyled>O</LetterBoxStyled>
                                </LetterRowStyled>
                            </div>
                            <div style={{
                                display:"block",
                                alignContent:"left",
                                justifyContent:"left",
                                textAlign:"left",
                                backgroundColor:"rgb(230, 225, 125)",
                                borderRadius:"25px",
                                padding:"3%",
                                marginTop:"1%",
                            }}>
                                Letra Correta Mas na posição errada  :
                                Se A Letra reluzir a cor amarela clara simboliza que a palavra possui a letra ao qual voce inserio mas o posicionamento da mesma não esta correta  
                                <LetterRowStyled style={{
                                    marginLeft:"auto",
                                    marginRight:"auto"
                                }}>
                                    <LetterBoxStyled className={"contem"+" "+tkgen(180) +" "+ tkgenum(699)} >B</LetterBoxStyled>
                                    <LetterBoxStyled>I</LetterBoxStyled>
                                    <LetterBoxStyled className={"correct"+" "+tkgen(180) +" "+ tkgenum(699) }>O</LetterBoxStyled>
                                    <LetterBoxStyled>L</LetterBoxStyled>
                                    <LetterBoxStyled className={"contem"+" "+tkgen(180) +" "+ tkgenum(699)} >O</LetterBoxStyled>
                                </LetterRowStyled>
                            </div>
                            <div style={{
                                display:"block",
                                alignContent:"left",
                                justifyContent:"left",
                                textAlign:"left",
                                backgroundColor:"rgb(130, 225, 125)",
                                borderRadius:"25px",
                                padding:"3%",
                                marginTop:"1%",
                            }}>
                                Não Contem 
                                Se a letra permanescer sem nenhuma interação simboliza que a palavra nao possui tal letra  
                                <LetterRowStyled style={{
                                    marginLeft:"auto",
                                    marginRight:"auto"
                                }}>
                                    <LetterBoxStyled className={"contem"+" "+tkgen(180) +" "+ tkgenum(699)} >B</LetterBoxStyled>
                                    <LetterBoxStyled>I</LetterBoxStyled>
                                    <LetterBoxStyled className={"correct"+" "+tkgen(180) +" "+ tkgenum(699) }>O</LetterBoxStyled>
                                    <LetterBoxStyled>L</LetterBoxStyled>
                                    <LetterBoxStyled className={"contem"+" "+tkgen(180) +" "+ tkgenum(699)}>O</LetterBoxStyled>
                                    <LetterBoxStyled className={"contem"+" "+tkgen(180) +" "+ tkgenum(699)}>G</LetterBoxStyled>
                                </LetterRowStyled>
                            </div>
                        </div>
                    </div>
                    <ButtonsStyles
                    onClick={() => startGame()}
                     className={"bt btazul " + tkgen(1999)}
                     >Iniciar Jogo </ButtonsStyles>
                </div>
            </div>
        </div>
        </>
    )
}
export {
    Wellcome
}