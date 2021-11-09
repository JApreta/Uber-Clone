import { useEffect,useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import tw from 'tailwind-styled-components'
import Map from './Components/Map'
import mapboxgl from '!mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoianVkaXRoLWFudG9uaW8iLCJhIjoiY2t2b2JxMmV2MWNnMDJ3dXBqMjN5Ym94dCJ9.AVbtctH3jq75PQw0NjJLaQ';
import { useRouter } from 'next/router'
import{onAuthStateChanged,signOut} from 'firebase/auth'
import { auth, provider } from '../firebase'
export default function Home() {

   const [user, setUser] = new useState(null)
    const router = useRouter()
    
    useEffect(() => {
        return onAuthStateChanged(auth, user => {
            if (user) {
                setUser({
                    name: user.displayName,
                    userPhoto:user.photoURL
                    
                })
            } else {
                setUser(null)
                router.push('/Login')
            }
        })
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Wrapper>
             <Map/>
            <ActionItems>
                <Header>
                    <UberLogo src='https://i.ibb.co/84stgjq/uber.png' />
                    <Profile>
                        <Name>{user && user.name}</Name>
                        <UserImg src={user && user.userPhoto} onClick={ ()=>signOut(auth)}/>
                    </Profile>
                </Header>
               
                <ActionsButtons>
                    <Link href="/Search" passHref>
                    <ActionButton>
                        <ActionButtonImg src='https://i.ibb.co/cyvcpfF/uberx.png'/> Ride
                    </ActionButton>
                    </Link>
                    <ActionButton>
                        <ActionButtonImg src='https://i.ibb.co/n776JLm/bike.png'/>Wheels</ActionButton>
                    <ActionButton>
                        <ActionButtonImg src='https://i.ibb.co/5RjchBg/uberschedule.png'/>Reserve</ActionButton>
                </ActionsButtons>
               <InputButton>Where to?</InputButton>
            </ActionItems>
        </Wrapper>
    )
}
const Wrapper = tw.div`
flex flex-col  h-screen
 `

 const ActionItems= tw.div`
     flex-1 p-4
 `
const Header = tw.div`
 flex justify-between items-center
 `
const UberLogo=tw.img`
    h-28
`
const Profile = tw.div`flex items-center`
const Name = tw.div`
mr-4 w-20 text-sm
`
const UserImg = tw.img`
h-20 w-20 rounded-full border border-gray-100 p-px
`
const ActionsButtons = tw.div`
flex
`
const ActionButton = tw.div`
flex
flex-1
bg-black-200
 m-1 h-32
 items-center
 flex-col
 justify-center
 rounded-lg
 transform hover:scale-105 transition
`
const ActionButtonImg=tw.img`
    h-3/5

`
const InputButton=tw.div`
    h-20 bg-gray-100 text-2xl p-4 flex item-center mt-8
`
