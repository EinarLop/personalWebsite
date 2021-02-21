import React from 'react';
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai'
import { ImProfile } from "react-icons/im"



const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #80cbc4;
  padding: 25px;
  font-family:  'Poppins', sans-serif;
  color:#004d40;
  align-items: space-evenly;
`;
const Title = styled.p`
display:block;
font-size: 3rem;
width: 100%;
font-weight: 500;
height: auto;
`

const Subtitle = styled.p`
display:block;
font-size: 2.2rem;
width: 100%;
font-weight: 500;
height: auto;
`
const Description = styled.p`
font-size: 1.6rem;
width: 100%;

::before{
  content: "● " ;
}

`
const LinkBox = styled.div`
margin-top:15px;
width: 175px;
display: flex;
justify-content: space-between;

`



const Github = styled(FaGithub)`
  width:4rem;
  height: 4rem;
`

const LinkedIn = styled(AiFillLinkedin)`
  width:4rem;
  height: 4rem;
`

const Resume = styled(ImProfile)`
  width:4rem;
  height: 4rem;
`
function Hero() {
  return (
    <Wrapper>
      <Title>Hey, my name is Einar</Title>
      <Subtitle>And I am:</Subtitle>

      <Description> A Computer science student at ITESM looking foward to graduating in winter 2021</Description>
      <Description>Web developer </Description>
      <LinkBox>

        <Github />
        <LinkedIn />
        <Resume />


      </LinkBox>

    </Wrapper>
  )
}

export default Hero 