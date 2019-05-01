import React, { Component } from 'react'
import hangman from "../images/Screen Shot 2019-04-27 at 9.53.56 AM.png"
import styled from 'styled-components'

const FrontDiv = styled.div`
  img {
      max-width: 100vw;
  }
`

export default class HangmanFront extends Component {
    render() {
        return (
            <FrontDiv>
                <img src={hangman} alt="Hangman" />
            </FrontDiv>
        )
    }
}
