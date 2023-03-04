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
import EthlocatorFront from './EthlocatorFront';
import EthlocatorBack from './EthlocatorBack'
const FlipCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60vw;
  p {
        font-size: 1.5vw;
        margin: .25vw;
        }
      h3 {
        font-size: 2vw;
        margin: .28vw;
      }
  @media only screen and (max-width: 750px) {
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
                <br />
                <p>click on image to see details</p>
                <br />
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
                <br />
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
                <br />
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
                <br />
                <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                >
                    <FrontSide>
                        <EthlocatorFront />
                    </FrontSide>
                    <BackSide
                        style={{
                            backgroundColor: 'rgb(239, 243, 249)',
                        }}>
                        <EthlocatorBack />
                    </BackSide>
                </Flippy>
                <br />
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
                <br />
            </FlipCards>
        )
    }
}