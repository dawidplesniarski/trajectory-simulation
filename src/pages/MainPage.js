import React, {useState} from "react";
import {withRouter} from "react-router";
import {StyledContainer} from "../styles/PageStyles";
import styled from "styled-components";
import TextInput from "../components/atoms/TextInput/TextInput";
import Button from "../components/atoms/Button/Button";
import {testPositions} from "../utils/helpers";
import {
    InputContainer,
    InputSubContainer,
    StyledContent,
    StyledTitle,
    StyledVectorContainer
} from "../styles/MainPageStyles";
import MapItem from "../components/molecules/MapItem";



const MainPage = () => {
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const [vectorArr, setVectorArr] = useState(testPositions);

    const putVectorToArray = (lat, long) => {
        const vector = {
            lat: lat,
            long: long
        }
        setVectorArr(oldArray => [...oldArray, vector]);
    }
    return (
        <>
            <StyledContainer>
                <StyledContainer>
                    <StyledTitle>Podaj współrzędne:</StyledTitle>
                    <InputContainer>
                        <InputSubContainer>
                            <TextInput onChange={e => setLat(e.target.value)} type={'text'} name={'lat'}
                                       placeholder={'Współrzędne X'}/>
                        </InputSubContainer>
                        <InputSubContainer>
                            <TextInput onChange={e => setLong(e.target.value)} type={'text'} name={'long'}
                                       placeholder={'Współrzędne Y'}/>
                        </InputSubContainer>
                        <InputSubContainer>
                            <Button onClick={() => putVectorToArray(lat, long)}>
                                Dodaj wektor
                            </Button>
                        </InputSubContainer>
                    </InputContainer>
                    {/*<StyledTitle>WEKTORY</StyledTitle>*/}
                    {/*{vectorArr.map((item, index) => {*/}
                    {/*    return <StyledVectorContainer><StyledContent>x = {item.lat}</StyledContent><StyledContent>y*/}
                    {/*        = {item.long}</StyledContent></StyledVectorContainer>*/}
                    {/*})}*/}
                    <MapItem vectorArr={vectorArr} zoom={15} iconSize={60} height={600} width={900}/>
                </StyledContainer>
            </StyledContainer>
        </>
    )
};

export default withRouter(MainPage)