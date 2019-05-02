import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import HangmanFront from './HangmanFront'
import RevHeadsFront from './RevHeadsFront'
import AtliveFront from './AtliveFront'
import RoastmeFront from './RoastmeFront'
import HangmanBack from './HangmanBack'
import AtliveBack from './AtliveBack'
import RevheadsBack from './RevheadsBack'
import RoastmeBack from './RoastmeBack';
import styled from 'styled-components'

const FlipCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default class FlipCard extends Component {
    render() {
        return (
            <FlipCards>
                <p>click on image to see details</p>
                <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                >
                    <FrontSide
                        style={{
                            maxWidth: '60vw',
                        }}
                    >
                        <HangmanFront />
                    </FrontSide>
                    <BackSide
                        style={{
                            maxWidth: '60vw',
                            backgroundColor: '#175852',
                        }}>
                        <HangmanBack />
                    </BackSide>
                </Flippy>
                <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                >
                    <FrontSide
                        style={{
                            maxWidth: '60vw',
                        }}
                    >
                        <RevHeadsFront />
                    </FrontSide>
                    <BackSide
                        style={{
                            maxWidth: '60vw',
                            backgroundColor: '#175852',
                        }}>
                        <RevheadsBack />
                    </BackSide>
                </Flippy>
                <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                >
                    <FrontSide
                        style={{
                            maxWidth: '60vw',
                        }}
                    >
                        <AtliveFront />
                    </FrontSide>
                    <BackSide
                        style={{
                            maxWidth: '60vw',
                            backgroundColor: '#175852',
                        }}>
                        <AtliveBack />
                    </BackSide>
                </Flippy>
                <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                >
                    <FrontSide
                        style={{
                            maxWidth: '60vw',
                        }}
                    >
                        <RoastmeFront />
                    </FrontSide>
                    <BackSide
                        style={{
                            maxWidth: '60vw',
                            backgroundColor: '#175852',
                        }}>
                    <RoastmeBack />
                </BackSide>
                </Flippy>
            </FlipCards>
        )
    }
}