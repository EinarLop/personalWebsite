import React from 'react';
import styled from 'styled-components';
import ProjectCardNew from './Components/ProjectCardNew'
import { ReactIcon, SassIcon, NodeIcon, MongodbIcon, PhpIcon, HtmlIcon, CssIcon, JavascriptIcon } from '../Components/Icons';


const Wrapper = styled.div`
font-family: "Poppins", sans-serif;
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
        description="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut al"
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
          <PhpIcon />,
          <JavascriptIcon/>,

        ]}
      />
    </Wrapper>
  )

}

export default Projects;