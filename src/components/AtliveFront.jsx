import React, { Component } from 'react'
import atlive from "../images/atliveimg.png"
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const FrontDiv = styled.div`
  img {
      max-width: 100%;
  }
`

export default class AtliveFront extends Component {
    render() {
        return (
            <FrontDiv>
                <Card>
                    <img src={atlive} alt="RevHeads" />
                </Card>
            </FrontDiv>
        )
    }
}
