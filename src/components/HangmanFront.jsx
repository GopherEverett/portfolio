import React, { Component } from 'react'
import hangman from "../images/Screen Shot 2019-04-27 at 9.53.56 AM.png"
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const FrontDiv = styled.div`
  img {
      max-width: 100%;
  }
`

export default class HangmanFront extends Component {
    render() {
        return (
            <FrontDiv>
                <Card>
                    <img src={hangman} alt="Hangman" />
                </Card>
            </FrontDiv>
        )
    }
}
