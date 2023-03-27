import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
}
`;


export const Container = styled.div`
  background-color: #023932;
  .img {
    width: 10vw;
    height: 22vh;
    border: none;
    position:relative;
    bottom: 3em;
    border-radius: 50%;
  }
  button {
    width: 6vw;
    height: 4vh;
    font-size:17px;
    background-color:#0C7D6E;
    border-radius: 5px;
    color: white;
    border: none;
    margin: 0 0 0 0.5em;
    
  }
`;
export const CardOne = styled.div`
  img{
    width:40vw;
    height: 20vw;
    margin:0 0 0 26em;
  }
`;
export const Input = styled.input`
  margin: -5em 0 5em 38em;
  background-color: #0C7D6E;
  border-radius: 5px;
  border:none;
  width: 20vw;
  height: 4vh;
  }
  ::-webkit-input-placeholder {
    color: #F0EFF4;
    padding: .5em;
 }

  
`;
export const DivideOne = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 250vh;
  width: 100%;
  gap: 7px;
`;
export const Card = styled.div`
  width: 15vw;
  height: 50vh;
  background-color: #0DAE98;
  border-radius: 5px;
  border: 2px solid #89fc00;
  display: flex;
  margin: 0 0 3em 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  transition: all 0.25s;
  :hover {
    background-color: #1BD1B9;
  }
  font-family: "Shadows Into Light", cursive;
`;
export const Divide = styled.div`
  width: 100%;
  height: 17vh;
  text-align: center;
   h2{
    color:white;
    position:relative;
    top:-1em;
   }

   p{
    color:white;
    position:relative;
    top:-1em;
   }
`;