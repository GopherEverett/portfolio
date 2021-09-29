import React, { Component } from 'react'
import vid from '../images/coding.mov'
import styled from 'styled-components'
import './backvid.css'

// const VidDiv = styled.div`
// #myVideo {
//   /* min-width: 100vw;
//   max-height: 60vh;
//   filter:saturate(160%); */
//     position: fixed;
//     z-index: -1;
//     width: 100%;
// }
// `

export default class BackVid extends Component {
    render() {
        return (
            <video autoPlay muted loop id="myVideo">
                <source src={vid} type="video/mp4" />
            </video>
        )
    }
}
