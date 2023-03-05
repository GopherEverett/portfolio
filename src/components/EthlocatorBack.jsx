import React, { Component } from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const BackDiv = styled.div`
  text-align: center;
`

export default class AtliveBack extends Component {
    render() {
        return (
            <BackDiv>
                <Card>
                <h3>Ethlocator</h3>
                    <p>Ethlocator is an app I created to find gas stations within a user selected radius of the user that sell E85 fuel.</p>
                    <h3>Technologies</h3>
                    <p>React</p>
                    <p>National Renewable Energy Laboratory API</p>
                    <p>Google Maps API</p>
                    <p>Live Site @<a href="https://ethlocator.com/"> ethlocator.com</a></p>
                </Card>
            </BackDiv>
        )
    }
}