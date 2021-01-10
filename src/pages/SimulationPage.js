import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {withRouter} from "react-router";
import SimulationDayCell from "../components/tables/SimulationTable/SimulationDayCell";
import {
    API_URL,
    generateLabels,
    getDeathsNumber, getInfectionsNumber,
    getRecoveredNumber,
    simulation
} from "../utils/helpers";
import Footer from "../components/molecules/Footer";
import { Line } from "react-chartjs-2";
import BackButton from "../components/atoms/BackButton/BackButton";
import axios from "axios";
import SettingsIcon from '../assets/images/settings.png';
import EditPresetForm from "../components/forms/EditPreset/EditPreset";

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
  border: 0.5px solid #dadada;
  background-color: #fbfbfb;
  border-radius: 20px;
  padding: 15px;
`;

const ChartsContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 300px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-left: 60px;
`;

const StyledSettingsButton = styled.button`
  background-color: transparent;
  border: none;
`;

const SimulationPage = ({location, history}) => {
    const [simulationTitle, setSimulationTitle] = useState('');
    const [simulationData, setSimulationData] = useState(simulation);
    const [editFormOpened, setEditFormOpened] = useState(false);

    const data = {
        labels: generateLabels(simulationData),
        datasets: [
            {
                label: "Deaths",
                data: getDeathsNumber(simulationData),
                fill: true,
                backgroundColor: "#ffe4e4",
                borderColor: "rgb(252,65,94)"
            },
            {
                label: "Recovered",
                data: getRecoveredNumber(simulationData),
                fill: true,
                borderColor: "#62C370",
                backgroundColor: "#dcfde3",
            }
        ]
    };

    const infectionsData = {
        labels: generateLabels(simulationData),
        datasets: [
            {
                label: "Infections",
                data: getInfectionsNumber(simulationData),
                fill: true,
                backgroundColor: "#d7c0ff",
                borderColor: "rgb(159,65,252)"
            }
        ]
    };

    const getSimulationData = () => {
        axios.get(`${API_URL}/days/generateSimulation/${simulationTitle}`)
            .then(res => {
                if(res.data) {
                    setSimulationData(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        if(location.nameProps) {
            setSimulationTitle(location.nameProps.name);
        }
        if(simulationTitle !== '') {
            getSimulationData();
        }
    },[simulationTitle])

    return (
        <>
            <BackButton onClick={() => history.push('/')}/>
            {editFormOpened && <EditPresetForm/>}
            <StyledContainer>
                <TitleContainer>
                    <StyledPageTitle>{simulationTitle}</StyledPageTitle>
                    <StyledSettingsButton onClick={() => setEditFormOpened(!editFormOpened)}>
                        <img src={SettingsIcon} alt={'Settings'}/>
                    </StyledSettingsButton>
                </TitleContainer>
                <StyledPageSubtitle>Summary</StyledPageSubtitle>
                <SummaryContainer>
                    <span>Healthy: {simulationData[simulation.length - 1].healthyPeoples}</span>
                    <span>Infected: {simulationData[simulation.length - 1].infectedPeoples}</span>
                    <span>Deaths: {simulationData[simulation.length - 1].deadPeoples}</span>
                    <span>Recovered: {simulationData[simulation.length - 1].curedPeoples}</span>
                </SummaryContainer>
                <ChartsContainer>
                    <StyledChartContainer>
                        <Line data={infectionsData}/>
                    </StyledChartContainer>
                    <StyledChartContainer>
                        <Line data={data}/>
                    </StyledChartContainer>
                </ChartsContainer>
                <StyledListContainer>
                    {simulationData.map((item, index) => {
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