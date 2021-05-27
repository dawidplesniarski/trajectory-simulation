import React from "react";
import {MapContainer, Marker, Popup, TileLayer, Polyline} from "react-leaflet";
import L from "leaflet";
import markerIcon from "../../assets/images/map-marker.png";
import startIcon from "../../assets/images/start.png";
import finishIcon from "../../assets/images/finish-flag.png";
import 'leaflet/dist/leaflet.css';

/**
 * Display map marker icon
 * @param _iconSize
 * @returns {*}
 */
function getIcon(_iconSize, index, arrayLength) {
    let icon = markerIcon;
    if(index === 0) {
        icon = startIcon;
    } else if(index === arrayLength - 1) {
        icon = finishIcon;
    }
    return L.icon({
        iconUrl: icon,
        iconSize: [_iconSize, _iconSize],
        iconAnchor: [32, 64]
    })
}


const MapItem = ({vectorArr, zoom, iconSize, width, height}) => {
    return (
        <>
            <MapContainer center={[vectorArr[0].lat, vectorArr[0].long]} zoom={zoom}
                          style={{width: width, height: height, marginBottom: '30px'}}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
                {vectorArr.map((item, index) => {
                    return (
                        <Marker position={[item.lat, item.long]} icon={getIcon(iconSize, index, vectorArr.length)}>
                            <Popup>
                                A pretty CSS3 popup. <br/> Easily customizable.
                            </Popup>
                        </Marker>
                    );
                })};

                {vectorArr.map((item, index) => {
                    console.log(vectorArr[index + 1]);
                    return (
                        <>
                            {index < vectorArr.length - 1 &&
                            <Polyline
                                positions={[[vectorArr[index].lat, vectorArr[index].long], [vectorArr[index + 1].lat, vectorArr[index + 1].long]]}
                                color={'blue'}
                                strokeWidth={50}
                            />}
                        </>
                    );
                })};
            </MapContainer>
        </>
    );
};

export default MapItem;