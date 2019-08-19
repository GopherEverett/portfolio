import React, { Component } from 'react'
import roastme from "../images/roastmeimg.webp"
import roastmeAlt from '../images/roastmeimg.jp2'
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
                    <picture>
                        <source srcSet={roastme} type="image/webp" />
                        <source srcSet={roastmeAlt} type="image/jp2" />
                        <img src={roastme} alt="RevHeads" />
                    </picture>
                </Card>
            </FrontDiv>
        )
    }
}