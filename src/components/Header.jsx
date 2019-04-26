import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const ProfileImage = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 50%;
`;

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
`

export default class Header extends Component {
    render() {
        return (
            <HeaderDiv>
                <Link to="/">
                    {/* <ProfileImage src={require('../assets/confettiCropped.jpg')} alt='Sophia Ciocca' /> */}
                    <ProfileTitle>JOHN JACOBS</ProfileTitle>
                </Link>
                <div>
                    <NavLink to='/'>ABOUT</NavLink>
                    <NavLink to='/projects'>PROJECTS</NavLink>
                    <NavLink to='/resume'>RESUME</NavLink>
                    <NavLink to='/contact'>CONTACT</NavLink>
                </div>
                <hr />
            </HeaderDiv>
        )
    }
}
