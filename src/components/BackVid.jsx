import React, { Component } from 'react'
import vid from '../images/coding.mov'
import styled from 'styled-components'
import './backvid.css'

export default class BackVid extends Component {
    render() {
        return (
            <video autoPlay muted loop id="myVideo">
                <source src={vid} type="video/mp4" />
            </video>
        )
    }
}
