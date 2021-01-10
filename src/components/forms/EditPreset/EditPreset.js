import React, {useState} from "react";
import {SimulationPresetWrapper, StyledFormTitle, StyledContentWrapper} from "./EditPreset.styles";
import TextInput from "../../atoms/TextInput/TextInput";
import Button from "../../atoms/Button/Button";
import AlertComponent from "../../Alert/Alert";

const EditPresetForm = () => {
    const [simulationName, setSimulationName] = useState(null);
    const [population, setPopulation] = useState(null);
    const [initialNumberOfInfected, setInitialNumberOfInfected] = useState(null);
    const [infectionRate, setInfectionRate] = useState(null);
    const [mortalityRate, setMortalityRate] = useState(null);
    const [cureTime, setCureTime] = useState(null);
    const [mortalTime, setMortalTime] = useState(null);
    const [simulationTime, setSimulationTime] = useState(null);
    const [alertVisible, setAlertVisible] = useState(false);


    return(
        <>
            {alertVisible && <AlertComponent type={'success'} message={'Preset added successfully'} onClick={() => setAlertVisible(false)}/>}
            <SimulationPresetWrapper>
                <StyledContentWrapper>
                    <StyledFormTitle>Edit simulation preset</StyledFormTitle>
                    <TextInput onChange={e => setSimulationName(e.target.value)} type={'text'} name={'Simulation Name'} placeholder={'Simulation name'}/>
                    <TextInput onChange={e => setPopulation(e.target.value)} type={'text'} name={'Population'} placeholder={'Population'}/>
                    <TextInput onChange={e => setInitialNumberOfInfected(e.target.value)} type={'text'} name={'Initial Infected'} placeholder={'Initial number of infected'}/>
                    <TextInput onChange={e => setInfectionRate(e.target.value)} type={'text'} name={'Infection Rate'} placeholder={'Infection rate'}/>
                    <TextInput onChange={e => setMortalityRate(e.target.value)} type={'text'} name={'Mortality Rate'} placeholder={'Mortality rate'}/>
                    <TextInput onChange={e => setCureTime(e.target.value)} type={'text'} name={'Cure Time'} placeholder={'Cure time'}/>
                    <TextInput onChange={e => setMortalTime(e.target.value)} type={'text'} name={'Mortal Time'} placeholder={'Mortal time'}/>
                    <TextInput onChange={e => setSimulationTime(e.target.value)} type={'text'} name={'Mortal Time'} placeholder={'Simulation time'}/>
                    <Button onClick={() => console.log('edit preset')} disabled={
                        simulationName === null||
                        population === null ||
                        initialNumberOfInfected === null ||
                        infectionRate === null ||
                        mortalityRate === null ||
                        cureTime === null ||
                        mortalTime === null ||
                        simulationTime === null}>
                        Edit preset
                    </Button>
                </StyledContentWrapper>
            </SimulationPresetWrapper>
        </>
    );
};

export default EditPresetForm;