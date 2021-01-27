import React from 'react';
import styled from 'styled-components'
import image from "./ProjectImages/demo.jpg"

const Wrapper = styled.div`
width: 300px;
height: auto;
margin: 25px auto 0 auto;
font-family: 'Poppins', sans-serif;
border: 1px solid transparent;
box-shadow: 0 10px 20px #eee, 0 6px 6px #d5d5d5;
border-radius:10px;
padding:10px;


//background-color: red;
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
display: flex;
height: 50px;
width: 125px;
background-color: #FFAF47;
border-radius: 5px;
color:white;
justify-content: center;
align-items: center;
font-size:1.8rem;

`




function ProjectCard() {
    return (
        <Wrapper>
            <Image src={image} />
            <Title> Inventory System</Title>
            <Description> This is a very good description</Description>
            <ButtonsContanier>
                <Button>Code</Button>
                <Button> Live</Button>
            </ButtonsContanier>
        </Wrapper>)
}

export default ProjectCard;