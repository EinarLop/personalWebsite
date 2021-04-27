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
  `;

  const Title = styled.p`
    font-size: 2rem;
    &:hover {
      color: #0d47a1;
      text-decoration: underline;
    }
    margin-bottom: 15px;
  `;
  const Description = styled.p`
    font-size: 1.6rem;
    margin-bottom: 15px;
  `;
  const MoreInfo = styled.p`
    font-size: 1.6rem;
    margin-bottom: 15px;
    color: purple;

    width: 50%;
  `;

  const Link = styled.div`
    font-size: 1.6rem;
    margin-bottom: 15px;
    background-color: purple;
    width: 50%;
    border: 1px solid transparent;
  `;

  const TagsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
  `;
  const Tag = styled.p`
    color: #61dbfb;
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
      <MoreInfo> More information</MoreInfo>
      <Link> Live version </Link>
    </Wrapper>
  );
}

export default ProjectCardNew;
