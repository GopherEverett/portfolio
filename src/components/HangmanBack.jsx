import React, { Component } from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const BackDiv = styled.div`
    text-align: center;
`

export default class HangmanBack extends Component {
    render() {
        return (
            <BackDiv>
                <Card>
                    <h3>Hangman</h3>
                    <p>A word game where a player chooses letters and if they are contained in a hidden word it fills in that letter. If word is filled in before eight incorrect guesses, player wins.</p>
                    <h3>Technologies</h3>
                    <p>Languages - HTML5, CSS3, Javascript</p>
                    <p>Libraries - Animate.css, jQuery</p>
                    <p>Audacity</p>
                    <p>VS Code</p>
                    <p>Project Planning - Figma, Trello</p>
                    <p>Live Site @<a href="https://hipster-hangman.netlify.com/">hipster-hangman.netlify.com/</a></p>
                </Card>
            </BackDiv>
        )
    }
}
