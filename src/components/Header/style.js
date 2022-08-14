import styled from "styled-components";

export const HeaderContainer = styled.div`
display: flex;
grid-template-columns: 1fr 1fr;
align-items: center;
justify-content: space-around;
background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
width: 100vw;
height: 5vh;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    button{
        flex-direction: column;
        justify-content: space-between;
        display: inline;
        margin: 0 15px;
        background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
        border: none;     
    }
`;
