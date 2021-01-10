import React from "react";
import styled from 'styled-components';
import HealthIcon from '../../../assets/images/heartbeat.png';
import RecoveredIcon from '../../../assets/images/first-aid-kit.png';
import VirusIcon from '../../../assets/images/virus.png';
import DeathIcon from '../../../assets/images/grave.png';

const StyledCellContainer = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-around;
  background-color: #fbfbfb;
  margin-top: 50px;
  border: 0.5px solid #dadada;
`;

const DescriptionCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  margin-top: 20px;
  font-family: Montserrat,serif;
  font-size: 1.5rem;
  font-weight: normal;
`;

const StyledIcon = styled.img`
  width: 100px;
  height: 100px;
`;

const StyledTitle = styled.p`
  display: flex;
  align-self: center;
  font-family: Montserrat,serif;
  font-size: 1.4rem;
  font-weight: bold;
`;

const SimulationDayCell = ({infected, healthy, death, recovered, day}) => {
    return (
        <>
            <StyledCellContainer>
                <StyledTitle>
                    Day {day}
                </StyledTitle>
                <DescriptionCell>
                    <span>Healthy</span>
                    <StyledIcon src={HealthIcon} alt={'Healthy peoples'}/>
                    <span>{healthy}</span>
                </DescriptionCell>
                <DescriptionCell>
                    <span>Recovered</span>
                    <StyledIcon src={RecoveredIcon} alt={'Recovered peoples'}/>
                    <span>{recovered}</span>
                </DescriptionCell>
                <DescriptionCell>
                    <span>Infected</span>
                    <StyledIcon src={VirusIcon} alt={'Infected peoples'}/>
                    <span>{infected}</span>
                </DescriptionCell>
                <DescriptionCell>
                    <span>Deaths</span>
                    <StyledIcon src={DeathIcon} alt={'Death peoples'}/>
                    <span>{death}</span>
                </DescriptionCell>
            </StyledCellContainer>
        </>
    );
};

export default SimulationDayCell;