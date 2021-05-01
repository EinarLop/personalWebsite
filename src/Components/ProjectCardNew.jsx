import react from "react";
import styled from "styled-components";



const Wrapper = styled.div`
    width: 100%;
    font-family: "Poppins", sans-serif;
    border: 2px solid #90caf9;
    border-radius: 10px;
    margin-top: 20px;
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    max-width: 768px;
   
  `;

const Title = styled.p`
    font-size: 2.2rem;
    margin-bottom: 15px;
    font-weight: 500;

  `;

const Description = styled.p`
    font-size: 1.6rem;
    margin-bottom: 15px;
  `;




const InfoLinkButton = styled.button`
 font-family: "Poppins", sans-serif;
    font-size: 1.6rem;
    margin-bottom: 15px;
    width: 90%;
    height: 40px;
    border-radius:5px;
    background-color: #fefefa;
   border: 2px solid #90caf9;
  
   color: black;
   justify-self: center;
   &:hover{
     background-color: #90caf9;
     color: #0d41A1;
   }


  `;

const InfoLinkContainer = styled.p`
    width: 50%;
    display: flex;
    justify-content: center;
    
    @media (max-width: 767px){
      width: 100%;
    }
  `;


const MadeWithAbout = styled.div`
 font-size: 1.8rem;
 margin-bottom: 10px;
 width: 100%;

`
const TagsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    width: 100%;

    flex-wrap: wrap;
  `;



const ProjectCardNew = (props) => {

  return (
    <Wrapper>
      <Title>  {props.title}</Title>
      <MadeWithAbout>About:</MadeWithAbout>
      <Description>
        {props.description}
      </Description>

      <MadeWithAbout>Made with:</MadeWithAbout>
      <TagsContainer  >
        {props.childComponents}
      </TagsContainer>
      <InfoLinkContainer>
        <InfoLinkButton> Live version</InfoLinkButton>
      </InfoLinkContainer>
      <InfoLinkContainer>
        <InfoLinkButton> Code </InfoLinkButton>
      </InfoLinkContainer>

    </Wrapper>
  );
}

export default ProjectCardNew;
