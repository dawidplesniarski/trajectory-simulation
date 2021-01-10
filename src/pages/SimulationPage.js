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
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        },
        {
            label: "Recovered",
            data: getRecoveredNumber(simulation),
            fill: false,
            borderColor: "#742774"
        }
    ]
};

const SimulationPage = () => {
    return (
        <>
            <span>Deaths: {getDeathsNumber(simulation).length} </span>
            <span>Recovered: {getRecoveredNumber(simulation).length}</span>
            <span></span>
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