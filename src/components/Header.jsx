import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import resume from '../documents/John_Jacobs_Resume.pdf'


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
                    <ProfileImage src={require('../images/IMG_0371.jpg')} alt='John A. Jacobs' />
                </Link>
                <ProfileTitle>JOHN A. JACOBS</ProfileTitle>
                <NavDiv>
                    <NavLink to='/about'>ABOUT</NavLink>
                    <NavLink to='/projects'>PROJECTS</NavLink>
                    <a href={resume} target="_blank">RESUME</a>
                </NavDiv>
            </HeaderDiv>
        )
    }
}
