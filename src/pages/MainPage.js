import React, {useState} from "react";
import {withRouter} from "react-router";
import {StyledContainer} from "../styles/PageStyles";
import styled from "styled-components";
import TextInput from "../components/atoms/TextInput/TextInput";
import Button from "../components/atoms/Button/Button";

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
`;

// const position = [51.505, -0.09]

const InputSubContainer = styled.div`
  width: 300px;
`;

const StyledTitle = styled.p`
  font-family: Montserrat,sans-serif;
  font-size: 20px;
  font-weight: bold;
`;

const StyledContent = styled.p`
  font-family: Montserrat,sans-serif;
  font-size: 16px;
  font-weight: bold;
`;

const StyledVectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: solid 1px;
  width: 300px;
  height: 50px;
  border-radius: 15px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-around;
`;

const MainPage = () => {
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const [vectorArr, setVectorArr] = useState([{lat: 45.44, long: 65.65}, {lat: 54.24, long: 73.35}]);

    const putVectorToArray = (lat, long) => {
        const vector = {
            lat: lat,
            long: long
        }
        setVectorArr(oldArray => [...oldArray, vector]);
    }
    return(
        <>
            <StyledContainer>
                <StyledContainer>

                    <StyledTitle>Podaj współrzędne:</StyledTitle>
                    <InputContainer>
                        <InputSubContainer>
                            <TextInput onChange={e => setLat(e.target.value)} type={'text'} name={'lat'} placeholder={'Współrzędne X'}/>
                        </InputSubContainer>
                        <InputSubContainer>
                            <TextInput onChange={e => setLong(e.target.value)} type={'text'} name={'long'} placeholder={'Współrzędne Y'}/>
                        </InputSubContainer>
                        <InputSubContainer>
                            <Button onClick={() => putVectorToArray(lat, long)}>
                                Dodaj wektor
                            </Button>
                        </InputSubContainer>
                    </InputContainer>
                    <StyledTitle>WEKTORY</StyledTitle>
                    {vectorArr.map((item, index) => {
                        return <StyledVectorContainer><StyledContent>x = {item.lat}</StyledContent><StyledContent>y = {item.long}</StyledContent></StyledVectorContainer>
                    })}

                        {/*<MapContainer center={position} zoom={13} scrollWheelZoom={false}>*/}
                        {/*    <TileLayer*/}
                        {/*        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'*/}
                        {/*        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/}
                        {/*    />*/}
                        {/*    <Marker position={position}>*/}
                        {/*        <Popup>*/}
                        {/*            A pretty CSS3 popup. <br /> Easily customizable.*/}
                        {/*        </Popup>*/}
                        {/*    </Marker>*/}
                        {/*</MapContainer>*/}

                </StyledContainer>
            </StyledContainer>
        </>
    )
};

export default withRouter(MainPage)