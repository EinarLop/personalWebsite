import React from 'react';
import styled from 'styled-components';
import Person from "./person.svg"
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai'
import { ImProfile } from "react-icons/im"
import { GrInherit } from 'react-icons/gr';
import ResumePdf from "./Resume/Resume.pdf"
import TechStack from './TechStack';


const AboutMe = () => {

  const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 25px;
    /* background-color: #F5F5F5; */
    font-family: "Poppins", sans-serif;
    max-width: 1024px;
    margin: 0 auto;
    
  `

  const Img = styled.img`
    width: 0;


    @media (min-width: 768px){
     width : 35%;
     max-height: 400px;
     margin: auto 0;
    }

    @media (min-width: 1024px){
     width : 40%;
     max-height: 410px;
    }
  `

  const About = styled.main`
    width: 100%;
    font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px){
     width : 65% ;
     padding-left: 25px;

     @media (min-width: 1024px){
     width : 60%;
    }

    }
  `
  const Title = styled.p`
    font-size: 3.5rem;
    /* color: #2C5784; */
    color: #FC5185;
    height: auto;
    @media (min-width: 768px){
     width : 70%;
    }
    /* line-height: 1.6; */
  `

  const SubTitle = styled.p`
    font-size: 3rem;
    color: black;
    height: auto;
 
    margin-top: 25px;
  `
  const Li = styled.li`
    font-size: 2.2rem;
    padding: 8px 0;
  `
  const Ul = styled.ul`
    list-style-position: outside;
    padding-left: 20px;
  `



  const LinkBox = styled.div`
    margin-top:40px;
    width: 100%;
    display: flex;
    justify-content: space-around;

  `

  const Link = styled.a`
    color: inherit; 
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    font-size: 1.8rem;

  `
  const Github = styled(FaGithub)`
    font-size: 5rem;
    &:hover{
      color:#FC5185;
    }
  `

  const LinkedIn = styled(AiFillLinkedin)`
    font-size: 5rem;
    &:hover{
      color:#FC5185;
    } 
  `

  const Resume = styled(ImProfile)`
    font-size: 5rem;
  &:hover{
    color:#FC5185;
  }
  `

  return (
    <>
      <Wrapper>
        <Img src={Person} />
        <About>
          <Title>Hi, I'm Einar. </Title>
          <Title> I'm a computer science student from Mexico.  </Title>

          <SubTitle>About Me:</SubTitle>
          <Ul>
            <Li> Student at Tecnológico de Monterrey</Li>
            <Li> Expected graduation date: summer 2023</Li>
            <Li>Looking for summer 2022 internship</Li>
            <Li> Passionate about web development</Li>

          </Ul>
        </About>

        <LinkBox>
          <Link href="https://github.com/einarlop" target="_blank" >
            <Github />
            Github
          </Link>

          <Link href="https://www.linkedin.com/in/einarlopez/" target="_blank">   <LinkedIn />

            LinkedIn
          </Link>

          <Link href={ResumePdf} target="_blank"> <Resume />
            Resume
          </Link>



        </LinkBox>

      </Wrapper >

      <TechStack />
    </>
  )



}

export default AboutMe;