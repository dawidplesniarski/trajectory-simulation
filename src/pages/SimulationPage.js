import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {withRouter} from "react-router";
import SimulationDayCell from "../components/tables/SimulationTable/SimulationDayCell";
import {generateLabels, getDeathsNumber, getRecoveredNumber, simulation} from "../utils/helpers";
import Footer from "../components/molecules/Footer";
import { Line } from "react-chartjs-2";
import BackButton from "../components/atoms/BackButton/BackButton";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
  margin-top: 30px;
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

const StyledPageTitle = styled.p`
  font-family: Montserrat,serif;
  font-weight: bold;
  font-size: 2.1rem;
`;
const StyledPageSubtitle = styled.p`
  font-family: Montserrat,serif;
  font-weight: bold;
  font-size: 1.6rem;
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: Montserrat,serif;
  font-size: 1.3rem;
  width: 700px;
  margin-bottom: 30px;
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

const SimulationPage = ({location, history}) => {
    const [simulationTitle, setSimulationTitle] = useState('Simulation');

    useEffect(() => {
        if(location.nameProps) {
            setSimulationTitle(location.nameProps.name);
        }
    },[])

    return (
        <>
            <BackButton onClick={() => history.push('/')}/>
            <StyledContainer>
                <StyledPageTitle>{simulationTitle}</StyledPageTitle>
                <StyledPageSubtitle>Summary</StyledPageSubtitle>
                <SummaryContainer>
                    <span>Healthy: {simulation[simulation.length - 1].healthyPeoples}</span>
                    <span>Infected: {simulation[simulation.length - 1].infectedPeoples}</span>
                    <span>Deaths: {simulation[simulation.length - 1].deadPeoples}</span>
                    <span>Recovered: {simulation[simulation.length - 1].curedPeoples}</span>
                </SummaryContainer>
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