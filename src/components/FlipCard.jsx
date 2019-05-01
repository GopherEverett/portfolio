import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import HangmanFront from '../components/HangmanFront'

export default class FlipCard extends Component {
    render() {
        return (
            <Flippy
                flipOnHover={false}
                flipOnClick={true}
                flipDirection="horizontal"
            >
                <FrontSide
                    style={{
                        backgroundColor: '#41669d',
                    }}
                >
                    <HangmanFront />
                </FrontSide>
                <BackSide
                    style={{ backgroundColor: '#175852' }}>
                    ROCKS
                </BackSide>
            </Flippy>
        )
    }
}