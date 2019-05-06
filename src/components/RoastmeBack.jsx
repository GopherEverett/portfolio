import React, { Component } from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const BackDiv = styled.div`
  img {
      max-width: 100%;
  }
  text-align: center;
`

export default class RoastmeBack extends Component {
    render() {
        return (
            <BackDiv>
                <Card>
                    <h3>RoastMe</h3>
                    <p>RoastMe is an online application for getting roasted and roasting others. Users can upload a photo for others to offer their roasts and offer theirs to others.</p>
                    <h3>Technologies</h3>
                    <p>HTML, CSS, and Javascript</p>
                    <p>Bootstrap CSS</p>
                    <p>Node.js with Express</p>
                    <p>MongoDB with Mongoose for database management</p>
                    <p>Handlebars client-side rendering</p>
                    <p>Project Planning - Lucidchart, Wireframe.cc, Trello</p>
                    <p>Live Site @<a href="https://evening-ravine-54483.herokuapp.com"> evening-ravine-54483.herokuapp.com</a></p>
                </Card>
            </BackDiv>
        )
    }
}