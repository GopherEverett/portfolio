import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';



const ProfileImage = styled.img`
  width: 6em;
  height: 6em;
  border-radius: 50%;
  box-shadow: 3px 3px 3px 3px #888888;
  transition: all .6s;
  &:hover {
      border-radius: 5%;
      transform: scale(1.5);
      }
`;

const NavDiv = styled.div`
  display: flex;
  justify-content: space-around;
  a {
    font-size: 1.5rem;
    color: black;
    text-decoration: none;
    transition: all .4s;
    &:focus, &:hover {
        text-decoration: none;
        color: rgb(82, 126, 229);
        transform: scale(1.3);
    }
  }
`

const HeaderDiv = styled.div`
  padding: 2rem;
  text-align: center;
  font-family: 'Special Elite', cursive;
  color: black;
  box-shadow:0px 3px 6px 4px #d3d3d3;
`;

const ProfileTitle = styled.h1`
  color: black;
  margin: 2rem;
`
const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: black;
  font-size: 1.5rem;
  text-decoration: none;
  transition: all .4s;
`

export default class Header extends Component {
    render() {
        return (
            <HeaderDiv>
                <Link to="/">
                    <ProfileImage src={require('../images/IMG_0595rev.jpg')} alt='John A. Jacobs' />
                </Link>
                <ProfileTitle>JOHN A. JACOBS</ProfileTitle>
                <NavDiv>
                    <NavLink to='/about'>ABOUT</NavLink>
                    <NavLink to='/projects'>PROJECTS</NavLink>
                    <a href="https://docs.google.com/document/d/1O0kiLGNu-oqjiDYe7UFsbI4d3Jpv4Z9Yuc3rT3EWUyU/edit?usp=sharing" rel="noopener noreferrer" target="_blank">RESUME</a>
                </NavDiv>
            </HeaderDiv>
        )
    }
}
