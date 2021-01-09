import React, {useState, useEffect} from 'react';
import {withRouter} from "react-router";
import styled from 'styled-components';
import SimulationsTable from "../components/tables/ChooseSimulationsTable/SimulationsTable";
import {simulationsData} from "../utils/helpers";
import {Paper} from "@material-ui/core";
import AddButton from "../components/atoms/AddButton";
import Footer from "../components/molecules/Footer";
import SimulationPreset from "../components/forms/SimulationPreset";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  margin-top: 100px;
`;

const TableWrapper = styled.div`
  display: flex;
  width: 80%
`

const ChooseSimulation = () => {
    const [formOpen, setFormOpen] = useState(false);


    return(
        <>
            <AddButton onClick={() => setFormOpen(!formOpen)} open={formOpen}/>
            <StyledContainer>
                {!formOpen ?
                    <TableWrapper>
                        <Paper elevation={10}>
                            <SimulationsTable data={simulationsData}/>
                        </Paper>
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