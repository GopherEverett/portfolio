import React, { Component } from 'react'
import revheads from "../images/revheadsimg.png"
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const FrontDiv = styled.div`
  img {
      max-width: 100%;
  }
`

export default class RevHeadsFront extends Component {
    render() {
        return (
            <FrontDiv>
                <Card>
                    <img src={revheads} alt="RevHeads" />
                </Card>
            </FrontDiv>
        )
    }
}
