import React, {useState} from "react";
import {withRouter} from "react-router";
import {StyledContainer} from "../styles/PageStyles";
import TextInput from "../components/atoms/TextInput/TextInput";
import Button from "../components/atoms/Button/Button";
import {testPositions, blockData} from "../utils/helpers";
import {
    InputContainer,
    InputSubContainer,
    StyledContent,
    StyledTitle,
    StyledVectorContainer,
    StyledBlockchainContainer,
    StyledBlockContainer,
    StyledVectorsContainer,
    StyledMainContainer,
    StyledBlocksContainer,
} from "../styles/MainPageStyles";
import sha256 from "js-sha256";
import MapItem from "../components/molecules/MapItem";

const initialState = [
    {
        id: 1,
        nick: "Admin",
        hash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        vectors: "40;65|54.24;73.56",
        timestamp: 1620807065348,
        prevhash: null,
    },
];

const MainPage = () => {
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");
    const [vectorArr, setVectorArr] = useState(testPositions);
    const [Blockchain, setBlockchain] = useState(initialState);
    const [BlockVector, setBlockVector] = useState(blockData);
    const [vectors, setVectors] = useState(testPositions);
    let blocktest = "";

    const putVectorToArray = (lat, long) => {
        const vector = {
            lat: Number(lat),
            long: Number(long),
        };
        setVectorArr((oldArray) => [...oldArray, vector]);
    };
    const putVectors = (lat, long) => {
        const vector = {
            lat: Number(lat),
            long: Number(long),
        };
        console.log(vector);
        setVectors((array) => [...array, vector]);
    };
    const createBlockchain = () => {
        console.log(vectors);
        vectors.map((value) => {
            const vector = `${value.lat};${value.long}|`;
            blocktest = blocktest + vector;
            console.log(blocktest);
        });

        console.log(blocktest);
        blocktest = blocktest.slice(0, -1)
        console.log(blocktest)
        const block = {
            id: Blockchain.length + 1,
            nick: "Admin",
            hash: sha256(Blockchain),
            vectors: blocktest,
            timestamp: Date.now(),
            prevhash: Blockchain[Blockchain.length - 1].hash,
        };
        setBlockchain((Blockchain) => [...Blockchain, block]);
        setBlockVector("");
        setVectors([]);
        blocktest = " ";
    };

    const handleClicking = (value) => {
        setVectorArr([]);
        console.log(value);
        const str = value.split("|");
        console.log(str);
        str.map((value) => {
            const vec = value.split(";");
            putVectorToArray(vec[0], vec[1]);
        });
    };

    return (
        <>
            <StyledMainContainer>
                <StyledContainer>
                    <StyledTitle>Podaj współrzędne:</StyledTitle>
                    <InputContainer>
                        <InputSubContainer>
                            <TextInput
                                onChange={(e) => setLat(e.target.value)}
                                type={"text"}
                                name={"lat"}
                                placeholder={"Współrzędne X"}
                                value={lat}
                            />
                        </InputSubContainer>
                        <InputSubContainer>
                            <TextInput
                                onChange={(e) => setLong(e.target.value)}
                                type={"text"}
                                name={"long"}
                                placeholder={"Współrzędne Y"}
                                value={long}
                            />
                        </InputSubContainer>
                        <InputSubContainer>
                            <Button onClick={() => putVectors(lat, long)}>
                                Dodaj wektor
                            </Button>
                        </InputSubContainer>
                    </InputContainer>
                    <StyledTitle>WEKTORY</StyledTitle>
                    <StyledVectorsContainer>
                        {vectors.map((item, index, key) => {
                            return (
                                <StyledVectorContainer>
                                    <StyledContent>x = {item.lat}</StyledContent>
                                    <StyledContent>y = {item.long}</StyledContent>
                                </StyledVectorContainer>
                            );
                        })}
                    </StyledVectorsContainer>
                    <InputSubContainer>
                        <Button onClick={() => createBlockchain()}>Dodaj block</Button>
                    </InputSubContainer>
                    <StyledBlockchainContainer>
                        <StyledTitle>Stworzone blocki:</StyledTitle>
                        <StyledBlocksContainer>
                            {Blockchain.map((item, index) => {
                                const prehash = (item) => {
                                    if (item.prevhash !== null) {
                                        return item.prevhash.substring(0, 20) + "...";
                                    } else {
                                        return null;
                                    }
                                };
                                return (
                                    <StyledBlockContainer
                                        onClick={() => handleClicking(item.vectors)}
                                    >
                                        <StyledContent>id = {item.id}</StyledContent>
                                        <StyledContent>właściciel = {item.nick}</StyledContent>
                                        <StyledContent>
                                            hash = {item.hash.substring(0, 20) + "..."}
                                        </StyledContent>
                                        <StyledContent>
                                            vectors = {item.vectors.substring(0, 20) + "..."}
                                        </StyledContent>
                                        <StyledContent>timestamp = {item.timestamp}</StyledContent>
                                        <StyledContent>prevhash = {prehash(item)}</StyledContent>
                                    </StyledBlockContainer>
                                );
                            })}
                        </StyledBlocksContainer>
                    </StyledBlockchainContainer>

                    <MapItem
                        vectorArr={vectors}
                        zoom={15}
                        iconSize={60}
                        height={700}
                        width={900}
                    />
                </StyledContainer>
            </StyledMainContainer>
        </>
    );
};

export default withRouter(MainPage);
