import React, { Component } from 'react'
import styled from 'styled-components'
const AboutDiv = styled.div`
    text-align: center;

`
export default class About extends Component {
  render() {
    return (
      <AboutDiv>
        <h2>Full-Stack Developer</h2>
        <p>Atlanta, GA</p>
        <p>I am driven by a challenge</p>
        <p>Whether coding, running, or riding I am always moving forward</p>
      </AboutDiv>
    )
  }
}
