import React from 'react';
import {withRouter} from "react-router";
import styled from 'styled-components';
import SimulationsTable from "../components/tables/ChooseSimulationsTable/SimulationsTable";
import {simulationsData} from "../utils/helpers";
import {Paper} from "@material-ui/core";

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
    return(
        <>
            <StyledContainer>
                <TableWrapper>
                    <Paper elevation={5}>
                        <SimulationsTable data={simulationsData}/>
                    </Paper>
                </TableWrapper>
            </StyledContainer>
        </>
    );
};

export default withRouter(ChooseSimulation);