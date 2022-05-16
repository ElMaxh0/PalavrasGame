import styledComponents from "styled-components";

const LetterBoxStyled =styledComponents.div `
border: 0.135rem solid rgb(128, 128, 128, 0.5);
border-radius: 3px;
margin: 2px;
border: solid 2px grey;
font-size: 2.5em;
font-family: 'Bebas Neue', cursive;
font-weight: 700;
height: 10vh;
width: 10vh;
aspect-ratio: 1 / 1;
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
`
const LetterRowStyled =styledComponents.div `
display: flex;

`
export{
    LetterRowStyled,
    LetterBoxStyled
}