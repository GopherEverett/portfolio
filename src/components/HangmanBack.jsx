import React, { Component } from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const FrontDiv = styled.div`
  img {
      max-width: 100%;
  }
`

export default class HangmanBack extends Component {
    render() {
        return (
            <FrontDiv>
                <Card>
                    <a href="https://www.johnajacobs.com/">Live Site</a>
                </Card>
            </FrontDiv>
        )
    }
}
