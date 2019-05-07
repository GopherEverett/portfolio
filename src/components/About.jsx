import React, { Component } from 'react'
import styled from 'styled-components'
const AboutDiv = styled.div`
    text-align: center;

`
export default class About extends Component {
  render() {
    return (
      <AboutDiv>
      <br/>
        <h2>Full-Stack Developer</h2>
        <p>Atlanta, GA</p>
        <p>I am a full-stack developer who is driven by a challenge.</p>
        <p>Professionally and personally my focus is on progress.</p>
        <p>Whether coding, running, or riding I am always moving forward.</p>
      </AboutDiv>
    )
  }
}
