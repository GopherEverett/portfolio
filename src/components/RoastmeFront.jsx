import React, { Component } from 'react'
import roastme from "../images/roastmeimg.png"
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const FrontDiv = styled.div`
  img {
      max-width: 100%;
  }
`

export default class RoastmeFront extends Component {
    render() {
        return (
            <FrontDiv>
                <Card>
                    <img src={roastme} alt="RevHeads" />
                </Card>
            </FrontDiv>
        )
    }
}