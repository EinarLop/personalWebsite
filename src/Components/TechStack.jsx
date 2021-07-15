import React from 'react';
import { ReactIcon, SassIcon, NodeIcon, MongodbIcon, HtmlIcon, MySqlIcon, StyledComponentsIcon, GitIcon, JavascriptIcon, PythonIcon, FirebaseIcon } from "./Icons";
import styled from 'styled-components'


const TechStack = () => {

  const Wrapper = styled.div`
    font-family: "Poppins", sans-serif;
    max-width: 1024px;
    margin: 0 auto;
    padding: 50px 25px 25px 25px;
    
  `

  const Title = styled.p`
    font-size:2.8rem;
    width: 100%;
    text-align: center;
    color: black;
    font-weight: 500;
  `

  const Subtitle = styled.p`
font-size:2.5rem;
width: 100%;
text-decoration: underline;
color: black;
`

  const IconContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    padding: 25px 0;
    gap: 15px;
  `

  return (
    <Wrapper>
      <Title>Skills</Title>

      <Subtitle> Languages</Subtitle>
      <IconContainer>
        <PythonIcon size="lg" />
        <JavascriptIcon size="lg" />
      </IconContainer>

      <Subtitle>Frontend</Subtitle>
      <IconContainer>
        <HtmlIcon size="lg" />
        <SassIcon size="lg" />
        <StyledComponentsIcon size="lg" />
        <ReactIcon size="lg" />

      </IconContainer>

      <Subtitle> Backend </Subtitle>
      <IconContainer>
        <NodeIcon size="lg" />
        <MongodbIcon size="lg" />
        <MySqlIcon size="lg" />
        <FirebaseIcon size="lg" />
      </IconContainer>

      <Subtitle> Tools</Subtitle>
      <IconContainer>  <GitIcon size="lg" /></IconContainer>
    </Wrapper>



  )

}

export default TechStack;