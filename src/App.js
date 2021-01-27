import ProjectCard from "./Components/ProjectCard";
import Hero from "./Components/Hero";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

function App() {
  return (
    <div>
      <Hero />
      <Wrapper>
        <ProjectCard />
        <ProjectCard />
      </Wrapper>
    </div>
  );
}

export default App;
