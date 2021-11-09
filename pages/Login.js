import React from 'react'
import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import{signInWithPopup, onAuthStateChanged} from 'firebase/auth'
import { auth, provider } from '../firebase'

export default function Login() {
    const router = useRouter()
    useEffect(() => {
        onAuthStateChanged(auth, user => {//get user auth fromgoogle
            if (user) {//if user exists
                router.push('/')//redirect to homepage
            }
        })
    },[])// eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <Wrapper>
            <UberLogo src='https://i.ibb.co/84stgjq/uber.png' />
            <Title>Log in to access your account</Title>
            <HeadImg src='https://i.ibb.co/CsV9RYZ/login-image.png'/>
            <SignInButton onClick={()=>signInWithPopup(auth,provider)}> Sign in with Google</SignInButton>

        </Wrapper>
    )
}
const Wrapper=tw.div`
    flex flex-col h-screen bg-grey-400 p-4
`
const SignInButton= tw.button`
    bg-black text-white text-center py-4 mt-8 self-center w-full
`
const UberLogo = tw.img`
h-20 w-auto object-contain self-start`
const Title=tw.div`
    text-5xl pt-4 text-gray-500
`

const HeadImg = tw.img`
 object-contain w-full h-64
`