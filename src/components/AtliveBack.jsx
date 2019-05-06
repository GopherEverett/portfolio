import React, { Component } from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const BackDiv = styled.div`
  img {
      max-width: 100%;
  }
  text-align: center;
`

export default class AtliveBack extends Component {
    render() {
        return (
            <BackDiv>
                <Card>
                <h3>ATLive</h3>
                    <p>ATLive is an online application that allows a user to choose from neighborhoods in Atlanta and access information about live music venues in that neighborhood. Users can also add neighborhoods and venues in them as well as edit or delete exisitng venues in the database.</p>
                    <h3>Technologies</h3>
                    <p>HTML, CSS, and Javascript</p>
                    <p>Node.js with Express</p>
                    <p>React.js front-end</p>
                    <p>MongoDB with Mongoose for database management</p>
                    <p>Google Maps API</p>
                    <p>Project Planning - Lucidchart, Trello</p>
                    <p>Live Site @<a href="https://atlive.herokuapp.com"> atlive.herokuapp.com</a></p>
                </Card>
            </BackDiv>
        )
    }
}