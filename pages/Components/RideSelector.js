import React from 'react'
import { useEffect, useState,useRef } from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'
import {carList} from '../../data/carList'

export default function RideSelector(props) {
    const [rideDuration, setRideDuration] = new useState()
    const tempUploadRideDuration= useRef()
    /*get ride duration from mapBox API
    //get pickup coordanates
    //get dropoff coordanates
    
    
    */
    function updateRideDuration() {
        if (props.pickUpCoordinates && props.dropOffCoordinates){
       fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${props.pickUpCoordinates[0]},${props.pickUpCoordinates[1]};${props.dropOffCoordinates[0]},${props.dropOffCoordinates[1]}?access_token=pk.eyJ1IjoianVkaXRoLWFudG9uaW8iLCJhIjoiY2t2b2JxMmV2MWNnMDJ3dXBqMjN5Ym94dCJ9.AVbtctH3jq75PQw0NjJLaQ `).
            then(response => response.json().then(data => {
                setRideDuration(data.routes[0].duration/100)
            })
           )
           }
    }
    tempUploadRideDuration.current=updateRideDuration
    useEffect(() => {
       tempUploadRideDuration.current()
          
    }, [props.pickUpCoordinates, props.dropOffCoordinates])
    
 
    return (
        <Wrapper >
            <Title>Choose a ride, or swipe up for more
              
            </Title>
            <CarList>
                {carList.map((car,index)=> (
                    <Car key={index}>
                        <CarImg src={ car.imgUrl}/>
                    <CarDetails>
                            <Service>{car.service}</Service>
                        <Time>5min away</Time>
                    </CarDetails>
                        <CarPrice>{ '$' + (rideDuration*car.multiplier).toFixed(2)}</CarPrice>
                </Car>
                ))}
                
              </CarList>

        </Wrapper>
    )
}

const Wrapper = tw.div`
flex-1 bg-white-500`

const Title=tw.div`
    text-gray-500 text-sm text-center py-2 border-b
`
const CarList = tw.div`
flex-1`
const CarImg = tw.img`
h-14 mr-4`
const Car = tw.div`
flex p-4 items-center
`
const CarDetails=tw.div`
   flex-1 
`
const CarPrice = tw.div``
const Service = tw.div`
font-medium`
const Time = tw.div`
text-xs text-blue-500`