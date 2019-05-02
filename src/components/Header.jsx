import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import resume from '../documents/John_Jacobs_Resume.pdf'


const ProfileImage = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 50%;
`;

const NavDiv = styled.div`
  display: flex;
  justify-content: space-around;
  a {
    font-size: 16px;
    color: black;
    text-decoration: none;
    transition: all .4s;
    &:focus, &:hover {
        text-decoration: none;
        color: rgb(198, 101, 172);
        transform: scale(1.3);
    }
  }
`

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Zilla Slab Highlight', sans-serif;
  color: black;
`;

const ProfileTitle = styled.h1`
  color: black;
`
const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: black;
  font-size: 16px;
  text-decoration: none;
  transition: all .4s;
    &:focus, &:hover {
        text-decoration: none;
        color: rgb(198, 101, 172);
        transform: scale(1.3);
    }
`

export default class Header extends Component {
    render() {
        return (
            <HeaderDiv>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <ProfileImage src={require('../images/IMG_0371.jpg')} alt='John A. Jacobs' />
                    <ProfileTitle>JOHN A. JACOBS</ProfileTitle>
                </Link>
                <NavDiv>
                    <NavLink to='/about'>ABOUT</NavLink>
                    <NavLink to='/projects'>PROJECTS</NavLink>
                    <a href={resume} target="_blank">RESUME</a>
                </NavDiv>
                <hr />
            </HeaderDiv>
        )
    }
}
