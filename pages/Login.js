import React from 'react'
import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'

export default function Login() {
    
    return (
        <Wrapper>
            <UberLogo src='https://i.ibb.co/84stgjq/uber.png' />
            <Title>Log in to access your account</Title>
            <HeadImg src='https://i.ibb.co/CsV9RYZ/login-image.png'/>
            <SignInButton> Sign in with Google</SignInButton>

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