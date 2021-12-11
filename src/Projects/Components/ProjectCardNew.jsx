import react from "react";
import styled from "styled-components";

const secondary = "#17B890"

const Wrapper = styled.div`
    width: 100%;
    font-family: "Poppins", sans-serif;
    border: 3px solid #158BCB;
    border-radius: 10px;
    margin-top: 20px;
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    max-width: 768px;
    
   
  `;

const Title = styled.p`
    font-size: 2.5rem;
    margin-bottom: 15px;
    font-weight: 500;

  `;

const Description = styled.p`
    font-size: 1.8rem;
    margin-bottom: 15px;
  `;




const InfoLinkButton = styled.button`
 font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    margin-bottom: 15px;
    width: 90%;
    height: 40px;
    border-radius:5px;
    /* background-color: #FC5185; */
    background-color: #158BCB;
    border: 2px solid #158BCB;
  
   color: white;
   justify-self: center;

   &:hover{
     background-color: transparent;
     color: #158BCB;

   }


  `;

const InfoLinkContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    
    @media (max-width: 767px){
      width: 100%;
    }
  `;


const MadeWithAbout = styled.div`
 font-size: 2rem;
 margin-bottom: 10px;
 width: 100%;

`
const TagsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    width: 100%;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 25px;
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
