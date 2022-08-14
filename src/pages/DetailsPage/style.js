import styled from "styled-components";

export const PokeInfosContainer = styled.main`

  height: 80vh;
  margin: 20px 10vw;
  display: flex;
  justify-content: space-evenly;
`;

export const ImagesContainer = styled.div`
  align-self: center;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgWrapper = styled.img`
  height: 25vh;
  background: #fafafa;
`;

export const StatsContainer = styled.div`
  background: #fafafa;
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
`;

export const TitleContainer = styled.h2`
  align-self: center;
`;

export const TypeAndMovesContainer = styled.div`
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TypesContainer = styled.div`
  background: #fafafa;
  height: 10%;
  display: flex;
  justify-content: space-around;
`;

export const MovesContainer = styled.div`
  background: #fafafa;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
`;
