import React from "react";
import styled from 'styled-components';
import {withRouter} from "react-router";
import SimulationDayCell from "../components/tables/SimulationTable/SimulationDayCell";
import {simulation} from "../utils/helpers";
import Footer from "../components/molecules/Footer";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
  margin-top: 100px;
`;

const StyledListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 65%;
`;

const SimulationPage = () => {
    return (
        <>
            <StyledContainer>
                <StyledListContainer>
                    {simulation.map((item, index) => {
                        return <SimulationDayCell
                            day={index + 1}
                            infected={item.infectedPeoples}
                            recovered={item.curedPeoples}
                            healthy={item.healthyPeoples}
                            death={item.deadPeoples}/>
                    })}
                </StyledListContainer>
            </StyledContainer>
            <Footer/>
        </>
    );
};

export default withRouter(SimulationPage);