import React from 'react';
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa';



const Wrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-wrap: wrap;
  background-color: #FFAF47;
  padding: 25px;
  font-family:  'Poppins', sans-serif;
  color:white;
  align-items: space-evenly;
`;
const Title = styled.p`
display:block;
font-size: 3rem;
width: 100%;
font-weight: 500;
height: auto;
`
const Description = styled.p`
font-size: 1.6rem;
width: 100%;

`
const LinksContainer = styled.div`


`
const LinkBox = styled.div`

`



const Github = styled(FaGithub)`
  width:4rem;
  height: 4rem;
`

function Hero() {
    return (
        <Wrapper>
            <Title>Hey, I am Einar </Title>
            <Description> I am a computer science student locatesd in mexico</Description>
            <LinksContainer>
                <LinkBox>

                    <Github />


                </LinkBox>
            </LinksContainer>
        </Wrapper>
    )
}

export default Hero 