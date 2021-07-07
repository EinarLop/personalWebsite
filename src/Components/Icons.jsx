import styled from "styled-components";
import { DiReact, DiSass, DiMongodb } from "react-icons/di";
import { GrNode } from "react-icons/gr";
import { SiJsonwebtokens } from "react-icons/si"
import { CgBee } from "react-icons/cg"




const Tag = styled.div`
  /* color: #61dbfb; */
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;

  padding: 0 15px 15px 0 ;
  align-items: center;
`;


const DiReactIcon = styled(DiReact)`
  font-size: 3rem;
  color: #43c1e4;
`;

const ReactIcon = () => {
  return (<Tag><DiReactIcon /> React</Tag>)
}


const DiSassIcon = styled(DiSass)`
  font-size: 3rem;
  color: #bf4080;
`;

const SassIcon = () => {
  return (<Tag> <DiSassIcon /> Sass</Tag>)
}


const GrNodeIcon = styled(GrNode)`
  font-size: 3rem;
  color: #43853d;
`;

const NodeIcon = () => {
  return (<Tag> <GrNodeIcon /> Node </Tag>)
}

const DiMongodbIcon = styled(DiMongodb)`
  font-size: 3rem;
  color: #13AA52;
`;

const MongodbIcon = () => {
  return (<Tag> <DiMongodbIcon /> MongoDB </Tag>)
}




export { ReactIcon, SassIcon, NodeIcon, MongodbIcon }