import React, {useState, useEffect} from 'react';
import {withRouter} from "react-router";
import styled from 'styled-components';
import SimulationsTable from "../components/tables/ChooseSimulationsTable/SimulationsTable";
import {API_URL, simulationsData} from "../utils/helpers";
import {Paper} from "@material-ui/core";
import AddButton from "../components/atoms/AddButton";
import Footer from "../components/molecules/Footer";
import SimulationPreset from "../components/forms/SimulationPreset";
import Banner from '../assets/images/baner.svg';
import axios from "axios";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  margin-top: 40px;
`;

const TableWrapper = styled.div`
  display: flex;
  width: 80%
`;

const StyledBanner = styled.img`
  width: 20%;
  margin-bottom: 30px;
`;

const ChooseSimulation = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [simulationsPresets, setSimulationsPresets] = useState([]);

    const getSimulationsPresets = () => {
        axios.get(`${API_URL}/simulation/findAll`)
            .then(res => {
                setSimulationsPresets(res.data);
            })
    }

    useEffect(() => {
        getSimulationsPresets();
    },[])

    return(
        <>
            <AddButton onClick={() => setFormOpen(!formOpen)} open={formOpen}/>
            <StyledContainer>
                {!formOpen && <StyledBanner src={Banner} alt={'Undraw Photo'}/>}
                {!formOpen ?
                    <TableWrapper>
                        {simulationsPresets.length > 0 ?
                        <Paper elevation={10}>
                            <SimulationsTable data={simulationsPresets}/>
                        </Paper> :
                            <Paper elevation={10}>
                                <SimulationsTable data={simulationsData}/>
                            </Paper>
                        }
                    </TableWrapper> :
                    <Paper elevation={10}>
                        <SimulationPreset/>
                    </Paper>
                }
            </StyledContainer>
            <Footer/>
        </>
    );
};

export default withRouter(ChooseSimulation);