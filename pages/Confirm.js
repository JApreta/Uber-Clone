import React from "react";
import { useEffect,useState , useRef} from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Map from "./Components/Map";
import RideSelector from "./Components/RideSelector";
export default function Confirm() {

    const [pickUpCoords, setPickUpCoords] = new useState([0,0])
    const [dropOffCoords, setDropOffCoords] = new useState([0,0])
    const router=useRouter()
    const { pickup, dropoff } = router.query
    const tempPickUpCoordinates = useRef()
    const tempDropOffCoordinates = useRef()

    function getPickUpCoordinates(pickUpL) {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUpL}.json?`+
            new URLSearchParams({
                access_token:'pk.eyJ1IjoianVkaXRoLWFudG9uaW8iLCJhIjoiY2t2b2JxMmV2MWNnMDJ3dXBqMjN5Ym94dCJ9.AVbtctH3jq75PQw0NjJLaQ',
                limit :1
        })).then(
            response => response.json()).then(data => {
                console.log(data.features[0].center);
            setPickUpCoords(data.features[0].center)})
    }

    function getDropOffCoordinates(dropoffL) {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoffL}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoianVkaXRoLWFudG9uaW8iLCJhIjoiY2t2b2JxMmV2MWNnMDJ3dXBqMjN5Ym94dCJ9.AVbtctH3jq75PQw0NjJLaQ',
                limit: 1
            })).then(
                response => response.json()).
            then(
                data => {
                    console.log(data.features[0].center)
                    setDropOffCoords(data.features[0].center)

                })
    
    }

    tempPickUpCoordinates.current = getPickUpCoordinates(pickup);
    tempDropOffCoordinates.current = getDropOffCoordinates(dropoff);
    
     useEffect(() => {
         tempPickUpCoordinates.current();
         tempPickUpCoordinates.current();
    },[dropoff,pickup])


    return (
        <Wrapper >
            <ButtonContainer>
                <Link href='/Search' passHref>
                    <BackImg src='https://img.icons8.com/ios-filled/50/000000/left.png'/>
                </Link>
            </ButtonContainer>
            <Map pickUpCoordinates={pickUpCoords} dropOffCoordinates={ dropOffCoords}/>
            <RideContainer>
                <RideSelector pickUpCoordinates={pickUpCoords} dropOffCoordinates={ dropOffCoords}/>
                <ConfirmButtonContainer><ConfirmButton>Comfirm Uber</ConfirmButton></ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

const Wrapper = tw.div`
flex  flex-col h-screen`

const RideContainer=tw.div`
  flex  flex-1 flex-col h-1/2
`


const ConfirmButtonContainer = tw.div`
border-t-2
`
const ConfirmButton = tw.div`
bg-black text-white flex flex-col text-center my-4 mx-4 py-4 text-xL
    
`
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`
const BackImg = tw.img`
h-full object-contain`
