import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { CgBee } from 'react-icons/cg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from "react-router-dom";



const Header = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: "Poppins", sans-serif;
    /* gap: 25px; */
    align-items: center;
    padding: 25px 25px 0 25px;
    background-color: #F5F5F5;
    flex-wrap: wrap;
    /* max-width: 1440px; */
    margin: auto;
    /* margin: 0 auto; */
    @media (min-width: 768px){
      justify-content: flex-start;
      gap: 25px; 
    }
  `
  const Bee = styled(CgBee)`
    font-size: 6rem ;
    color: #158BCB;
    
    
  `

  const HamburgerIcon = styled(GiHamburgerMenu)`
    font-size: 4rem;
    color: black;
    @media (min-width: 768px){
      display: none;
    }
  `

  const Nav = styled(Link)`
    font-size: 2.5rem;
    color: #000000;
    border-bottom: 2px solid black;
    width: 100%;
    text-align: right;
    padding: 10px 0;
    text-decoration: none;
    @media (min-width: 768px){
      text-align: left;
      border: 0;
      padding: 0;
    }
    ${props => props.primary && css`
      @media (min-width: 768px){
        display: none;
      }
    `}
  `

  const Menu = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (min-width: 768px){
      flex-direction: row;
      width: auto;
      justify-content: space-between;
      gap: 25px;
      align-items: center;
    }

    ${props => props.primary && css`
      display: none;
     

      @media (min-width: 768px){
        display: flex
      }
    `}
  `

  const MenuLg = styled.div`
    display: none;
    @media (min-width: 768px){
      flex-direction: row;
      width: auto;
      justify-content: space-between;
      gap: 25px;
      align-items: center;
      display: flex;
    }
  `
  const Test = styled.div`
    display: none;
   @media (min-width: 768px){
      
    }
  `
  window.onresize = resize;

  function resize() {
    setOpenMenu(false)
  }


  return (
    <Wrapper>

      <Bee />
      <HamburgerIcon onClick={() => { setOpenMenu(!openMenu) }} />
      {openMenu ? (<Menu>
        <Nav to="/" >About</Nav>
        {/* <Nav>Resume</Nav> */}
        <Nav to="/projects">Projects</Nav>
        <Nav to="/certifications">Certifications</Nav>
      </Menu>) : (
        <></>
      )}


      <Menu primary>
        <Nav to="/" >About</Nav>
        {/* <Nav>Resume</Nav> */}
        <Nav to="/projects">Projects</Nav>
        <Nav to="/certifications" >Certifications</Nav>
      </Menu>

    </Wrapper>

  )

}

export default Header;