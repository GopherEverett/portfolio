import React, { Component } from 'react'
import ethlocator from "../images/ethlocator.webp"
import ethlocatorAlt from "../images/ethlocator.jp2"
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const FrontDiv = styled.div`
  img {
      max-width: 100%;
  }
`

export default class EthlocatorFront extends Component {
    render() {
        return (
            <FrontDiv>
                <Card>
                    <picture>
                        <source srcSet={ethlocatorAlt} type="image/jp2" />
                        <img src={ethlocator} alt="Ethlocator" />
                    </picture>
                </Card>
            </FrontDiv>
        )
    }
}
