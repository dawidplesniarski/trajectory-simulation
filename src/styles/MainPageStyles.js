import styled from "styled-components";

const InputSubContainer = styled.div`
  width: 300px;
`;

const StyledTitle = styled.p`
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: bold;
`;

const StyledContent = styled.p`
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: bold;
`;

const StyledVectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: solid 1px;
  width: 300px;
  height: 50px;
  border-radius: 15px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-around;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
`;
const StyledMainTitle = styled.h1`
  font-family: Montserrat, sans-serif;
  font-size: 30px;
  font-weight: bold;
`;
const StyledBlockchainContainer = styled.div`
height:400px
`;
const StyledBlockContainer = styled.button`
  display: flex;
  flex-direction: column;
  border: solid 1px;
  width: 280px;
  height: 300px;
  border-radius: 15px;
  align-items: center;
  justify-content: space-around;
  margin-right: 30px;
`;
const StyledVectorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  width: 90%;
`;
const StyledMainContainer = styled.div`
overflow-y: hidden;
`;

const StyledBlocksContainer = styled.div`
display: flex;
flex-direction: row;
`
export {
  StyledVectorContainer,
  StyledContent,
  StyledTitle,
  InputSubContainer,
  InputContainer,
  StyledMainTitle,
  StyledBlockchainContainer,
  StyledBlockContainer,
  StyledVectorsContainer,
  StyledMainContainer,
  StyledBlocksContainer
};
