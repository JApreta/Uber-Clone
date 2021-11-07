import React from "react";
import { useEffect } from "react";
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoianVkaXRoLWFudG9uaW8iLCJhIjoiY2t2b2JxMmV2MWNnMDJ3dXBqMjN5Ym94dCJ9.AVbtctH3jq75PQw0NjJLaQ';

export default function Map(props) {
    useEffect(() => {

        const map= new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [-99.29011, 39.39172],
        zoom: 3,
        });
        if (props.pickUpCoordinates) { addToMap(map, props.pickUpCoordinates) }
        if(props.dropOffCoordinates){addToMap(map, props.dropOffCoordinates)}
        
        if (props.pickUpCoordinates && props.dropOffCoordinates) {
            map.fitBounds([
                props.pickUpCoordinates,
                props.dropOffCoordinates
            ],{padding:60})
        }
        
    },[props.pickUpCoordinates,props.dropOffCoordinates]);/* run when the App runs for the 1st time  updates according to the givon cord */
    
    function addToMap(map,coordanates) {
        const marker1= new mapboxgl.Marker().setLngLat(coordanates).addTo(map)
    
}
    return (
        <Wrapper id='map' >
        
        </Wrapper>

    )
}

const Wrapper = tw.div `
flex-1 h-1/2
`