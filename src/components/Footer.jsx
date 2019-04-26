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
  text-align: center;
  height: 150px;
  position: absolute;
  bottom: 0;
  width: 100%;
  a img {
  transition: all .4s;
  height: 32px;
  width: 32px;
}
a img:hover {
  transform: scale(1.5);
}
`;

const IconList = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
`

export default class Footer extends Component {
    render() {
        return (
            <FooterDiv>
                <IconList>
                    <Link className="icon" to="https://git.generalassemb.ly/JohnAJacobs"><img src={gitIcon} alt="GitHub" /></Link>
                    <Link className="icon" to="https://www.linkedin.com/in/john-a-jacobs/"><img src={inIcon} alt="LinkedIn"/></Link>
                    <Link className="icon" to="https://www.instagram.com/gophereverett"><img src={instaIcon}
                        alt="Instagram" /></Link>
                    <Link className="icon" to="mailto:john.a.jacobs1973@gmail.com"><img src={mailIcon}
                        alt="john.a.jacobs1973@gmail.com" /></Link>
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
