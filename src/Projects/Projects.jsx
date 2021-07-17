import React from 'react';
import styled from 'styled-components';
import ProjectCardNew from './Components/ProjectCardNew'
import { ReactIcon, SassIcon, NodeIcon, MongodbIcon } from '../Components/Icons';

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
        title="100% Original Inventory System"
        description="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut al"
        childComponents={[
          <ReactIcon />,
          <SassIcon />,
          <NodeIcon />,
          <MongodbIcon />,
        ]}
      />
    </Wrapper>
  )

}

export default Projects;