import React from 'react';
import styled from 'styled-components';
import ProjectCardNew from './Components/ProjectCardNew'
import { ReactIcon, SassIcon, NodeIcon, MongodbIcon, PhpIcon, HtmlIcon, CssIcon, JavascriptIcon, MySqlIcon } from '../Components/Icons';


const Wrapper = styled.div`
font-family: "Poppins", sans-serif;
min-height:100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px;
`

const Title = styled.p`
font-size: 3.5rem;
/* color: #2C5784; */
color: #158BCB;
width: 100%;
text-align: center;
`




const Projects = () => {

  
  return (
    <Wrapper>

      <Title> Personal Projects</Title>
      <ProjectCardNew
        github="//github.com/einarlop/dines"
        deployed="false"
        title="Dines"
        description="Final project for my web developmet course. Platform to share dishes and restaurants with your friends and with the public.
        Every dish (dine) contains relevant information for foodies such as price, restaurant and score.
        Users can create profiles, add, edit and delete dines and scroll through the commuinty dines "
        pics={[
          {caption: "Homepage", image:  'dines_00.png'}, 
          {caption:"Register", image: 'dines_02.png'},
          {caption:"Login", image: 'dines_01.png'},
          {caption:"New Dine", image: 'dines_03.png'},
          {caption:"My Dines", image: 'dines_04.png'},
          {caption:"Update Dine", image: 'dines_05.png'},
          {caption:"Community Dines", image: 'dines_06.png'},

        ]}
        childComponents={[
          <HtmlIcon />,
          <CssIcon/>,
          <JavascriptIcon/>,
          <MySqlIcon/>,
          <PhpIcon />,

        ]}
      />
    </Wrapper>
  )

}

export default Projects;