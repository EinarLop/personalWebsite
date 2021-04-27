import { useState } from "react";
import ProjectCard from "./Components/ProjectCard";
import CertificationCard from "./Components/CertificationCard";
import Hero from "./Components/Hero";
import ProjectCardNew from "./Components/ProjectCardNew.jsx";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #fefefa;
  justify-content: space-evenly;
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px;
`;

const Button = styled.a`
  margin: 50px auto;
  border: 1px solid transparent;
  display: flex;
  height: 50px;
  width: 200px;
  background-color: #90caf9;
  border-radius: 5px;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  color: #0d47a1;
  font-family: "Poppins", sans-serif;
`;

const Title = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 25px;
  text-align: center;
  font-weight: 500;
`;
function App() {
  const [shown, setShown] = useState(true);
  const [buttonText, setButtonText] = useState("Show certifications");
  const [titleText, setTitleText] = useState(
    "Here are some of my favortite projects"
  );

  function changeContent() {
    setShown(!shown);
    if (shown) {
      setButtonText("Show projects");
      setTitleText("Here are some of my certifications");
    } else {
      setButtonText("Show certifications");
      setTitleText("Here are some of my favortite projects");
    }
  }
  return (
    <div>
      <Hero />
      <Button onClick={changeContent}>{buttonText}</Button>
      <Title>{titleText}</Title>
      {shown ? (
        <Wrapper>
          <ProjectCardNew />
        </Wrapper>
      ) : (
        <Wrapper>
          <CertificationCard />
        </Wrapper>
      )}
    </div>
  );
}

export default App;
