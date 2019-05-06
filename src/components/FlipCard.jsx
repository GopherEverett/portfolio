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
  max-width: 60vw;
  @media only screen and (max-width: 860px) {
      max-width:95vw;
      
      p {
        font-size: .5rem;
        margin: 2.75px;
        }
      h3 {
        font-size: .7rem;
        margin: 3px;
      }
  }
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
                    <FrontSide>
                        <HangmanFront />
                    </FrontSide>
                    <BackSide
                        style={{
                            backgroundColor: 'rgb(239, 243, 249)',
                        }}>
                        <HangmanBack />
                    </BackSide>
                </Flippy>
                <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                >
                    <FrontSide>
                        <RevHeadsFront />
                    </FrontSide>
                    <BackSide
                        style={{
                            backgroundColor: 'rgb(239, 243, 249)',
                        }}>
                        <RevheadsBack />
                    </BackSide>
                </Flippy>
                <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                >
                    <FrontSide>
                        <AtliveFront />
                    </FrontSide>
                    <BackSide
                        style={{
                            backgroundColor: 'rgb(239, 243, 249)',
                        }}>
                        <AtliveBack />
                    </BackSide>
                </Flippy>
                <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                >
                    <FrontSide>
                        <RoastmeFront />
                    </FrontSide>
                    <BackSide
                        style={{
                            backgroundColor: 'rgb(239, 243, 249)',
                        }}>
                    <RoastmeBack />
                </BackSide>
                </Flippy>
            </FlipCards>
        )
    }
}