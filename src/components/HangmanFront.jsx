import React, { Component } from 'react'
import hangman from "../images/hangmanimg.webp"
import hangmanAlt from "../images/Screen-Shot-2019-04-27-at-9.53.56-AM.jp2"
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
                    <picture>
                        <source srcSet={hangman} type="image/webp" />
                        <source srcSet={hangmanAlt} type="image/jp2" />
                        <img src={hangman} alt="RevHeads" />
                    </picture>
                </Card>
            </FrontDiv>
        )
    }
}
