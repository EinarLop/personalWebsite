import styled, { css } from "styled-components";
import { DiReact, DiSass, DiMongodb, DiGit, DiPython, DiCss3} from "react-icons/di";
import { GrNode, GrMysql } from "react-icons/gr";
import { SiJsonwebtokens, SiStyledComponents, SiJavascript, SiFirebase, SiPhp} from "react-icons/si"
import { CgBee } from "react-icons/cg"
import { AiFillHtml5, AiFillGithub } from "react-icons/ai"
import{FaJava } from "react-icons/fa"






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
  font-size: 5rem;
  color: #43c1e4;
  ${props => props.lg && css`
      font-size: 7rem;
    `}
`;

const ReactIcon = (props) => {
  return (
    props.size === "lg" ?
      (<Tag><DiReactIcon lg /> React </Tag>)
      : (<Tag><DiReactIcon /> React</Tag>)
  )
}

const SiPhpIcon = styled(SiPhp)`
  font-size: 5.2rem;
  color: #7477A9;
  ${props => props.lg && css`
      font-size: 7rem;
    `}
`;

const PhpIcon = (props) => {
  return (
    props.size === "lg" ?
      (<Tag><SiPhpIcon lg /> Php </Tag>)
      : (<Tag><SiPhpIcon /> Php </Tag>)
  )
}


const AiFillHtml5Icon = styled(AiFillHtml5)`
  font-size: 5rem;
  color: #F16524;
  ${props => props.lg && css`
      font-size: 7rem;
    `}
`;

const HtmlIcon = (props) => {
  return (
    props.size === "lg" ?
      (<Tag><AiFillHtml5Icon lg /> HTML </Tag>)
      : (<Tag><AiFillHtml5Icon /> HTML</Tag>)
  )
}


const DiCss3Icon = styled(DiCss3)`
  font-size: 5.2rem;
  color: #5297f8;
  ${props => props.lg && css`
      font-size: 7rem;
    `}
`;

const CssIcon = (props) => {
  return (
    props.size === "lg" ?
      (<Tag><DiCss3Icon lg /> CSS </Tag>)
      : (<Tag><DiCss3Icon /> CSS </Tag>)
  )
}

const DiSassIcon = styled(DiSass)`
  font-size: 5rem;
  color: #bf4080;
  ${props => props.lg && css`
      font-size: 7rem;
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
  font-size: 4.9rem;
  color: #43853d;
  ${props => props.lg && css`
      font-size: 6rem;
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
  font-size: 5rem;
  color: #13AA52;
  ${props => props.lg && css`
      font-size: 7rem;
    `}
`;

const MongodbIcon = (props) => {
  return (
    props.size === "lg" ?
      (<Tag> <DiMongodbIcon lg /> MongoDB</Tag>)
      : (<Tag><DiMongodbIcon /> MongoDB</Tag>)
  )
}

const GrMysqlIcon = styled(GrMysql)`
  font-size: 5rem;
  color: #08497e;
  ${props => props.lg && css`
      font-size: 6rem;
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
      font-size: 7rem;
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
 font-size: 5rem;
  color: #F7DF1E;
  ${props => props.lg && css`
      font-size: 6rem;
    `}
`
const JavascriptIcon = (props) => {
  return (
    props.size === "lg" ?
      (<Tag> <SiJavascriptIcon lg /> Javascript</Tag>)
      : (<Tag><SiJavascriptIcon /> Javascript</Tag>)
  )
}


const FaJavaIcon = styled(FaJava)`
 font-size: 3rem;
  color: #da3a33;
  ${props => props.lg && css`
      font-size: 7rem;
    `}

    `

const JavaIcon = (props) => {
  return (
    props.size === "lg" ?
      (<Tag> <FaJavaIcon lg /> Java</Tag>)
      : (<Tag><FaJavaIcon /> Java</Tag>)
  )
}

const DiPythonIcon = styled(DiPython)`
 font-size: 3rem;
  color: #436C97;
  ${props => props.lg && css`
      font-size: 7rem;
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


export { ReactIcon, SassIcon, NodeIcon, MongodbIcon, HtmlIcon, MySqlIcon, StyledComponentsIcon, GitIcon, JavascriptIcon, PythonIcon, FirebaseIcon, JavaIcon,PhpIcon,CssIcon }