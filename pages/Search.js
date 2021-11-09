import React from 'react'
import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'


export default function Search() {
    const [pickUp, setPickUP] = new useState()
    const [dropOff, setDropOff] = new useState()
    function updatePickUp(e) {
        setPickUP(e.target.value)
    }
    function updateDropOff(e){
        setDropOff(e.target.value)
   }
    return (
        
        <Wrapper >
            <ButtonContainer>
               <Link href="/" passHref>
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png/"/>
                </Link>
            </ButtonContainer>
            <InputContainer>
                <FromToIcons>
                    <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                    <VerticalLine src="https://img.icons8.com/ios-filled/50/9CA3AF/vertical-line.png" />
                    <Square src="https://img.icons8.com/ios-filled/50/9CA3AF/square.png" />
                </FromToIcons>
                <InputBoxes>
                    <Input placeholder="Enter pickup location" value={pickUp} onChange={updatePickUp}/>
                    <Input placeholder="Where to?" value={dropOff} onChange={updateDropOff}/>
                </InputBoxes>
                <PlusIcon src='https://img.icons8.com/ios-filled/50/000000/plus-math.png'/>
            </InputContainer>

            <SavedPlaces>
                <StartIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
                Saved Places
            </SavedPlaces>
            {pickUp &&dropOff? 
            <Link href={{
                pathname: '/Confirm',
                query: {
                    pickup: pickUp,
                    dropoff:dropOff
                
            }}} passHref>
            <ConfirmLocation> Confirm Locations</ConfirmLocation>
                </Link>
                :               
            <ConfirmLocation> Confirm Locations</ConfirmLocation>
               
}


        </Wrapper>
    )

}
const Wrapper = tw.div `
  
    bg-gray-200 h-screen

`
const ButtonContainer = tw.div`
   flex  bg-white  px-4
`
const BackButton = tw.img`
    h-12
`
const InputContainer = tw.div`
flex px-4 mb-2
bg-white

`
const FromToIcons = tw.div`
 flex flex-col mr-2 w-10
items-center
`
const Circle = tw.img`
h-2.5`
const VerticalLine = tw.img`
h-10`
const Square = tw.img`
h-3`
const InputBoxes = tw.div`
flex flex-col flex-1 
`
const Input = tw.input`
h-10 bg-gray-200
my-2
rounded-2 p-2
outline-none
border-none

`
const PlusIcon=tw.img`
   flex items-center w-10 h-10 bg-gray-400 rounded-full ml-3 
`
const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2
`
const StartIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full `

const ConfirmLocation=tw.div`
 bg-black text-white
mx-4 my-4 h-10 py-3 p-4 text-center text-2xl cursor-pointer

`


