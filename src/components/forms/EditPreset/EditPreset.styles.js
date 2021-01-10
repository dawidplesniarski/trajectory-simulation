import styled from 'styled-components';

const SimulationPresetWrapper = styled.div`
  background-color: #fcfcfc;
  border-radius: 15px;
  width: 700px;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 20%;
  margin-left: -350px;
  padding: 0.25rem;
  border: 1px solid #dadada;
  align-items: center;
  @media (max-width: 1000px) {
    width: 500px;
  }
  @media (max-width: 800px) {
    width: 400px;
  }
  @media (max-width: 700px) {
    width: 350px;
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
`;

const StyledFormTitle = styled.p`
  font-family: Montserrat,serif;
  font-weight: 500;
  font-size: 25px;
  @media(max-width: 768px) {
    font-size: 20px;
  }
`;

export {SimulationPresetWrapper, StyledFormTitle, StyledContentWrapper};