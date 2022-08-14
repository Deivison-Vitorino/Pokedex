import styled from "styled-components";

export const HeaderPokemon = styled.div`
gap: 10px;
margin: 2%;
width: 20vw;
height: 20vh;
background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
  rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
  rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
  rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
  rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
&:hover {
  cursor: pointer;
  transform: scale(1.05);
}
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokeImg = styled.img`
height: 100px;
`;

export const ButtonsContainer = styled.div`
display: flex;
grid-template-columns: 1fr 1fr;
button{
background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
border-radius: 6px;
box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
flex-direction: column;
justify-content: space-between;
color: #FFFFFF;
cursor: pointer;
display: flex;
font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
height: 40px;
line-height: 40px;
outline: 0;
overflow: hidden;
padding: 0 20px;
pointer-events: auto;
position: relative;
text-align: center;
touch-action: manipulation;
user-select: none;
-webkit-user-select: none;
vertical-align: top;
white-space: nowrap;
width: 100%;
z-index: 9;
border: 0;
transition: box-shadow .2s;

  &:hover {
      box-shadow: rgba(253, 76, 0, 0.5) 0 3px 8px;
      transform: scale(1.05);

  }
}
`;
