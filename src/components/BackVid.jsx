import React, { Component } from 'react'
import vid from '../images/Tkf9kEbBT3kxI1Nxc8h4kyDPf9kcb72wD6ilcuXJ.mp4'
import styled from 'styled-components'

const VidDiv = styled.div`
#myVideo {
  min-width: 100vw; 
}
`

export default class BackVid extends Component {
    render() {
        return (
            <VidDiv>
                <video autoPlay muted loop id="myVideo">
                    <source src={vid} type="video/mp4" />
                </video>
            </VidDiv>
        )
    }
}
