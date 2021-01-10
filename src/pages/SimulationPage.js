import React from "react";
import styled from 'styled-components';
import {withRouter} from "react-router";
import SimulationDayCell from "../components/tables/SimulationTable/SimulationDayCell";
import {generateLabels, getDeathsNumber, getRecoveredNumber, simulation} from "../utils/helpers";
import Footer from "../components/molecules/Footer";
import { Line } from "react-chartjs-2";

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

const StyledChartContainer = styled.div`
  display: flex;
  width: 50%;
`;

const data = {
    labels: generateLabels(simulation),
    datasets: [
        {
            label: "Deaths",
            data: getDeathsNumber(simulation),
            fill: true,
            backgroundColor: "#ffe4e4",
            borderColor: "rgb(252,65,94)"
        },
        {
            label: "Recovered",
            data: getRecoveredNumber(simulation),
            fill: true,
            borderColor: "#62C370",
            backgroundColor: "#dcfde3",
        }
    ]
};

const SimulationPage = () => {
    return (
        <>
            <StyledContainer>
                <StyledChartContainer>
                    <Line data={data}/>
                </StyledChartContainer>
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