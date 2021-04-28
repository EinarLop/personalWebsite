import react from "react";
import styled from "styled-components";
function ProjectCardNew() {

  const Wrapper = styled.div`
    width: 100%;
    font-family: "Poppins", sans-serif;
    border: 2px solid black;
    margin-top: 20px;
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    max-width: 1024px;
  `;

  const Title = styled.p`
    font-size: 2rem;
    margin-bottom: 15px;
  `;

  const Description = styled.p`
    font-size: 1.6rem;
    margin-bottom: 15px;
  `;


  const InfoLinkButton = styled.button`
    font-size: 1.6rem;
    margin-bottom: 15px;
    width: 100%;
    height: 40px;
    border-radius:5px;
    background-color: #fefefa;
   border: 2px solid #9ccc65;
   color: #33691e;
   justify-self: center;
   &:hover{
     background-color: #9ccc65;
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



  const TagsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    margin-bottom:15px;
  `;
  const Tag = styled.p`
    /* color: #61dbfb; */
    font-size: 1.8rem;
    &::before {
      content: "▹";
    }
  `;

  return (
    <Wrapper>
      <Title> 105% Original Inventory System </Title>
      <Description>
        orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut al
      </Description>
      <TagsContainer>
        <Tag> React </Tag>
      </TagsContainer>
      <InfoLinkContainer>
        <InfoLinkButton> More information</InfoLinkButton>
      </InfoLinkContainer>
      <InfoLinkContainer>
        <InfoLinkButton> Live version </InfoLinkButton>
      </InfoLinkContainer>

    </Wrapper>
  );
}

export default ProjectCardNew;
