import styled from "styled-components";

const InputSubContainer = styled.div`
  width: 300px;
`;

const StyledTitle = styled.p`
  font-family: Montserrat,sans-serif;
  font-size: 20px;
  font-weight: bold;
`;

const StyledContent = styled.p`
  font-family: Montserrat,sans-serif;
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

export {StyledVectorContainer, StyledContent, StyledTitle, InputSubContainer, InputContainer};