import React from 'react';
import styled from 'styled-components'
import { Document, Page } from "react-pdf";
import HtmlCss from "./CertificationFiles/htmlCss.pdf"

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 70%; /* 16:9 Aspect Ratio */
  margin: 50px 15px;


`

const Certification = styled.iframe`

position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
  max-width: 500px;
  max-height: 390px;
  overflow:hidden;
  



`
const Image = styled.img`
width: 100%;
height:200px;
`

const Title = styled.p`
display:flex;
font-size: 2rem;
width: 100%;
font-weight: 500;
height:75px;
align-items:center;
`

const Description = styled.p`
font-size: 1.6rem;
width: 100%;
height: 150px;
`

const ButtonsContanier = styled.div`
font-size: 1.6rem;
width: 100%;
height: 75px;
display: flex;
justify-content: space-between;
align-items: center;
`

const Button = styled.a`
border: 1px solid transparent;
display: flex;
height: 50px;
width: 125px;
background-color:
#80cbc4;
border-radius: 5px;
color:white;
justify-content: center;
align-items: center;
font-size:1.8rem;
color:#004d40;
`




function CertificationCard() {
    return (
        <Wrapper>
          
            <Certification frameborder="0" src="https://drive.google.com/file/d/1hPE0dHM6DKbHH1Be46qNJmTRp9Vwahl7/preview" />

        </Wrapper>
    )


}

export default CertificationCard;