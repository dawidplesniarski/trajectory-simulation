import React from "react";
import styled from 'styled-components';
import HealthIcon from '../../../assets/images/heartbeat.png';
import RecoveredIcon from '../../../assets/images/first-aid-kit.png';
import VirusIcon from '../../../assets/images/virus.png';
import DeathIcon from '../../../assets/images/grave.png';

const StyledCellContainer = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-around;
  background-color: #dadada;
  margin-top: 100px;
`;

const DescriptionCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 80%;
`;

const StyledIcon = styled.img`
  width: 100px;
  height: 100px;
`;

const SimulationDayCell = ({infected, healthy, death, recovered}) => {
    return (
        <>
            <StyledCellContainer>
                <DescriptionCell>
                    <StyledIcon src={HealthIcon} alt={'Healthy peoples'}/>
                    <span>{healthy}</span>
                </DescriptionCell>
                <DescriptionCell>
                    <StyledIcon src={RecoveredIcon} alt={'Recovered peoples'}/>
                    <span>{recovered}</span>
                </DescriptionCell>
                <DescriptionCell>
                    <StyledIcon src={VirusIcon} alt={'Infected peoples'}/>
                    <span>{infected}</span>
                </DescriptionCell>
                <DescriptionCell>
                    <StyledIcon src={DeathIcon} alt={'Death peoples'}/>
                    <span>{death}</span>
                </DescriptionCell>
            </StyledCellContainer>
        </>
    );
};

export default SimulationDayCell;