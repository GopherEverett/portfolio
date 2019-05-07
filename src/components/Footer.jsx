import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import inIcon from '../images/linkedin-sign.png'
import gitIcon from '../images/github-logo.png'
import instaIcon from '../images/instagram.png'
import mailIcon from '../images/email.png'

const FooterDiv = styled.div`
  padding-top: 3rem;
  padding-bottom: 0;
  background-color: white;
  box-shadow:0px -3px 6px 4px #d3d3d3;
  text-align: center;
  max-height: 10rem;
  position: relative;
  bottom: 0;
  width: 100%;
  a img {
  transition: all .4s;
  height: 32px;
  width: 32px;
}
a img:hover {
  transform: scale(1.3);
}
`;

const IconList = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  max-width: 50%;
  margin: 0 auto;
`

export default class Footer extends Component {
    render() {
        return (
            <FooterDiv>
                <IconList>
                    <a className="icon" href="https://github.com/GopherEverett"><img src={gitIcon} alt="GitHub" /></a>
                    <a className="icon" href="https://www.linkedin.com/in/john-a-jacobs/"><img src={inIcon} alt="LinkedIn"/></a>
                    <a className="icon" href="https://www.instagram.com/gophereverett"><img src={instaIcon}
                        alt="Instagram" /></a>
                    <a className="icon" href="mailto:john.a.jacobs1973@gmail.com"><img src={mailIcon}
                        alt="john.a.jacobs1973@gmail.com" /></a>
                </IconList>
                <br/>
                <div className="row" id="copyright" style={{ margin: 0 }}>
                    <div className="col-lg-12">
                        <p className="small">© 2019 John A. Jacobs</p>
                    </div>
                </div>
            </FooterDiv>
        )
    }
}
