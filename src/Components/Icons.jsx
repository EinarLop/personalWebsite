import styled, { css } from "styled-components";
import { DiReact, DiSass, DiMongodb, DiGit, DiPython } from "react-icons/di";
import { GrNode, GrMysql } from "react-icons/gr";
import { SiJsonwebtokens, SiStyledComponents, SiJavascript, SiFirebase } from "react-icons/si"
import { CgBee } from "react-icons/cg"
import { AiFillHtml5, AiFillGithub } from "react-icons/ai"





const Tag = styled.div`
  /* color: #61dbfb; */
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;

  /* padding: 0 15px 15px 0 ; */
  align-items: center;

  text-align: center;
 
`;


const DiReactIcon = styled(DiReact)`
  font-size: 3rem;
  color: #43c1e4;
  ${props => props.lg && css`
      font-size: 5rem;
    `}
`;

const ReactIcon = (props) => {
  return (
    props.size === "lg" ?
      (<Tag><DiReactIcon lg /> React </Tag>)
      : (<Tag><DiReactIcon /> React</Tag>)
  )
}



const AiFillHtml5Icon = styled(AiFillHtml5)`
  font-size: 3rem;
  color: #F16524;
  ${props => props.lg && css`
      font-size: 5rem;
    `}
`;

const HtmlIcon = (props) => {
  return (
    props.size === "lg" ?
      (<Tag><AiFillHtml5Icon lg /> HTML </Tag>)
      : (<Tag><AiFillHtml5Icon /> HTML</Tag>)
  )
}


const DiSassIcon = styled(DiSass)`
  font-size: 3rem;
  color: #bf4080;
  ${props => props.lg && css`
      font-size: 5rem;
    `}
`;

const SassIcon = (props) => {
  return (
    props.size === "lg" ?
      (<Tag> <DiSassIcon lg /> Sass</Tag>)
      : (<Tag><DiSassIcon /> Sass</Tag>)
  )

}


const GrNodeIcon = styled(GrNode)`
  font-size: 3rem;
  color: #43853d;
  ${props => props.lg && css`
      font-size: 5rem;
    `}
`;

const NodeIcon = (props) => {
  return (
    props.size === "lg" ?
      (<Tag> <GrNodeIcon lg /> Node</Tag>)
      : (<Tag><GrNodeIcon /> Node</Tag>)
  )
}

const DiMongodbIcon = styled(DiMongodb)`
  font-size: 3rem;
  color: #13AA52;
  ${props => props.lg && css`
      font-size: 5rem;
    `}
`;

const MongodbIcon = (props) => {
  return (
    props.size === "lg" ?
      (<Tag> <DiMongodbIcon lg /> MongoDb</Tag>)
      : (<Tag><DiMongodbIcon /> MongoDb</Tag>)
  )
}

const GrMysqlIcon = styled(GrMysql)`
  font-size: 3rem;
  color: #08497e;
  ${props => props.lg && css`
      font-size: 5rem;
    `}
`;


const MySqlIcon = (props) => {
  return (
    props.size === "lg" ?
      (<Tag> <GrMysqlIcon lg /> MySQL</Tag>)
      : (<Tag><GrMysqlIcon /> MySQL</Tag>)
  )
}


const SiStyledComponentsIcon = styled(SiStyledComponents)`
 font-size: 3rem;
  color: #c859ba;
  ${props => props.lg && css`
      font-size: 5rem;
    `}
`
const StyledComponentsIcon = (props) => {
  return (
    props.size === "lg" ?
      (<Tag> <SiStyledComponentsIcon lg /> S.C.</Tag>)
      : (<Tag><SiStyledComponentsIcon /> S.C.</Tag>)
  )
}

const DiGitIcon = styled(DiGit)`
 font-size: 3rem;
  color: #F34B2E;
  
  ${props => props.lg && css`
      font-size: 5rem;
    `}
`
const GitIcon = (props) => {
  return (
    props.size === "lg" ?
      (<Tag> <DiGitIcon lg /> Git</Tag>)
      : (<Tag><DiGitIcon /> Git</Tag>)
  )
}




const SiJavascriptIcon = styled(SiJavascript)`
 font-size: 3rem;
  color: #F7DF1E;
  ${props => props.lg && css`
      font-size: 4rem;
    `}
`
const JavascriptIcon = (props) => {
  return (
    props.size === "lg" ?
      (<Tag> <SiJavascriptIcon lg /> Javascript</Tag>)
      : (<Tag><SiJavascriptIcon /> Javascript</Tag>)
  )
}




const DiPythonIcon = styled(DiPython)`
 font-size: 3rem;
  color: #436C97;
  ${props => props.lg && css`
      font-size: 4rem;
    `}
`
const PythonIcon = (props) => {
  return (
    props.size === "lg" ?
      (<Tag> <DiPythonIcon lg /> Python</Tag>)
      : (<Tag><DiPythonIcon /> Python</Tag>)
  )
}

//#FFCB2C
//SiFirebase

const SiFirebaseIcon = styled(SiFirebase)`
 font-size: 3rem;
  color: #FFCB2C;
  ${props => props.lg && css`
      font-size: 4rem;
    `}
`
const FirebaseIcon = (props) => {
  return (
    props.size === "lg" ?
      (<Tag> <SiFirebaseIcon lg /> Firebase</Tag>)
      : (<Tag><SiFirebaseIcon /> Firebase</Tag>)
  )
}


export { ReactIcon, SassIcon, NodeIcon, MongodbIcon, HtmlIcon, MySqlIcon, StyledComponentsIcon, GitIcon, JavascriptIcon, PythonIcon, FirebaseIcon }