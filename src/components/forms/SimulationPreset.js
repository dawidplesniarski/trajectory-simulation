import React, {useState} from "react";
import {SimulationPresetWrapper, StyledFormTitle, StyledContentWrapper} from "./SimulationPreset.styles";
import TextInput from "../atoms/TextInput/TextInput";
import Button from "../atoms/Button/Button";
import AlertComponent from "../Alert/Alert";
import axios from "axios";
import {API_URL} from "../../utils/helpers";


const SimulationPreset = () => {
    const [simulationName, setSimulationName] = useState(null);
    const [population, setPopulation] = useState(null);
    const [initialNumberOfInfected, setInitialNumberOfInfected] = useState(null);
    const [infectionRate, setInfectionRate] = useState(null);
    const [mortalityRate, setMortalityRate] = useState(null);
    const [cureTime, setCureTime] = useState(null);
    const [mortalTime, setMortalTime] = useState(null);
    const [simulationTime, setSimulationTime] = useState(null);
    const [alertVisible, setAlertVisible] = useState(false);

    const addNewPreset = () => {
        axios.post(`${API_URL}/simulation/addSimulation`,{
            simulationName: simulationName,
            population: population,
            initialNumberOfInfected: initialNumberOfInfected,
            infectionRate: infectionRate,
            mortalityRate: mortalityRate,
            cureTime: cureTime,
            mortalTime: mortalTime,
            simulationTime: simulationTime
        }).then(res =>
            setAlertVisible(true)
        ).catch(err =>
        console.log(err));
    }


    return(
        <>
            {alertVisible && <AlertComponent type={'success'} message={'Preset added successfully'} onClick={() => setAlertVisible(false)}/>}
            <SimulationPresetWrapper>
                <StyledContentWrapper>
                    <StyledFormTitle>Add simulation preset</StyledFormTitle>
                    <TextInput onChange={e => setSimulationName(e.target.value)} type={'text'} name={'Simulation Name'} placeholder={'Simulation name'}/>
                    <TextInput onChange={e => setPopulation(e.target.value)} type={'text'} name={'Population'} placeholder={'Population'}/>
                    <TextInput onChange={e => setInitialNumberOfInfected(e.target.value)} type={'text'} name={'Initial Infected'} placeholder={'Initial number of infected'}/>
                    <TextInput onChange={e => setInfectionRate(e.target.value)} type={'text'} name={'Infection Rate'} placeholder={'Infection rate'}/>
                    <TextInput onChange={e => setMortalityRate(e.target.value)} type={'text'} name={'Mortality Rate'} placeholder={'Mortality rate'}/>
                    <TextInput onChange={e => setCureTime(e.target.value)} type={'text'} name={'Cure Time'} placeholder={'Cure time'}/>
                    <TextInput onChange={e => setMortalTime(e.target.value)} type={'text'} name={'Mortal Time'} placeholder={'Mortal time'}/>
                    <TextInput onChange={e => setSimulationTime(e.target.value)} type={'text'} name={'Mortal Time'} placeholder={'Simulation time'}/>
                    <Button onClick={async () => await addNewPreset()} disabled={
                        simulationName === null||
                        population === null ||
                        initialNumberOfInfected === null ||
                        infectionRate === null ||
                        mortalityRate === null ||
                        cureTime === null ||
                        mortalTime === null ||
                        simulationTime === null}>
                        Add preset
                    </Button>
                </StyledContentWrapper>
            </SimulationPresetWrapper>
        </>
    );
};

export default SimulationPreset;