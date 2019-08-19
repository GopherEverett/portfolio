import React, { Component } from 'react'
import atlive from "../images/atliveimg.webp"
import atliveAlt from "../images/atliveimg.jp2"
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
                    <picture>
                        <source srcSet={atlive} type="image/webp" />
                        <source srcSet={atliveAlt} type="image/jp2" />
                        <img src={atlive} alt="RevHeads" />
                    </picture>
                </Card>
            </FrontDiv>
        )
    }
}
