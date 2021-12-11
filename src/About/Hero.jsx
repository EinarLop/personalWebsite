import React from 'react';
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai'
import { ImProfile } from "react-icons/im"
import { GrInherit } from 'react-icons/gr';
import ResumePdf from "./Resume/Resume.pdf"



const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;

  background-color:
#90caf9;
  padding: 25px;
  font-family:  'Poppins', sans-serif;
 
  color:#0d47a1;
  //align-items: space-evenly;
`;
const Title = styled.p`
display:block;
font-size: 3.5rem;
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
font-size: 2rem;
width: 100%;

::before{
  content: "➜ " ;
}

`
const LinkBox = styled.div`
margin-top:25px;
width: 175px;
display: flex;
justify-content: space-between;

`

const Link = styled.a`
color: inherit; 
`
const Github = styled(FaGithub)`
  width:4rem;
  height: 4rem;
  &:hover{
    color:white;
  }
`

const LinkedIn = styled(AiFillLinkedin)`
  width:4rem;
  height: 4rem;
  &:hover{
    color:white;
  }
`

const Resume = styled(ImProfile)`
  width:4rem;
  height: 4rem;
  &:hover{
    color:white;
  }
`
function Hero() {
    return (
        <Wrapper>
            <Title>Hello, I am Einar</Title>


            <Description> A Computer science student at ITESM looking foward to graduating in summer 2023</Description>
            <Description>Web developer </Description>
            <LinkBox>
                <Link href="https://github.com/einarlop" target="_blank" >
                    <Github />
                </Link>

                <Link href="https://www.linkedin.com/in/einarlopez/" target="_blank">   <LinkedIn /> </Link>

                <Link href={ResumePdf} target="_blank"> <Resume /> </Link>



            </LinkBox>

        </Wrapper>
    )
}

export default Hero