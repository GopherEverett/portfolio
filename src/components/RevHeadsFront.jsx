import React, { Component } from 'react'
import revheads from "../images/revheadsimg.webp"
import revheadsAlt from "../images/revheadsimg.jp2"
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
                    <picture>
                        <source srcSet={revheads} type="image/webp" />
                        <source srcSet={revheadsAlt} type="image/jp2" />
                        <img src={revheads} alt="RevHeads" />
                    </picture>
                </Card>
            </FrontDiv>
        )
    }
}
