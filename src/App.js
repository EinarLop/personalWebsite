import { useState } from "react";
import { ReactIcon, SassIcon, NodeIcon, MongodbIcon } from "./Components/Icons";
// import ProjectCard from "./Projects/Components/ProjectCard";
// import CertificationCard from "./Certifications/CertificationCard";

// import ProjectCardNew from "./Projects/Components/ProjectCardNew.jsx";
import styled from "styled-components";
import Header from "./Components/Header";
import About from "./About/About";
import Projects from "./Projects/Projects.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// const Wrapper = styled.div`
//   width: 100%;
//   height: auto;
//   display: flex;
//   flex-wrap: wrap;
//   background-color: #fefefa;
//   justify-content: space-evenly;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 25px;

// `;

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

const Wrapper = styled.div`
  background-color: #f5f5f5;
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
    <Router>
      <Wrapper>
        <Header />
        <Route exact path="/" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/certifications" component={About} />
      </Wrapper>
    </Router>
  );
}

export default App;

{
  /* <Hero />
      <Button onClick={changeContent}>{buttonText}</Button>
      <Title>{titleText}</Title>
      {shown ? (
        <Wrapper>
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
      ) : (
        <Wrapper>
          <CertificationCard url="https://drive.google.com/file/d/1hPE0dHM6DKbHH1Be46qNJmTRp9Vwahl7/preview" />

          <CertificationCard url="https://drive.google.com/file/d/1p4znXL3uFGZg1uElZiBaOHWV-aUGfQyQ/preview" />
        </Wrapper>
      )} */
}
