import React, { Component } from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const BackDiv = styled.div`
  text-align: center;
`

export default class RevheadsBack extends Component {
    render() {
        return (
            <BackDiv>
                <Card>
                    <h3>RevHeads</h3>
                    <p>RevHeads is an app which allows auto enthusiasts to browse a list of car builders and see their project cars or "builds". These cars can be up or down voted by the user. Users can choose individual builds and see details of those builds in a projects section. Users can submit their car's VIN and see it's value and manufacturing data.</p>
                    <h3>Technologies</h3>
                    <p>Django REST framework</p>
                    <p>PostgresQL database</p>
                    <p>React.js front-end</p>
                    <p>VinAudit and NHTSA APIs</p>
                    <p>Project Planning - Lucidchart, Trello</p>
                    <p>Live Site @<a href="https://revheads.net/"> revheads.herokuapp.com</a></p>
                </Card>
            </BackDiv>
        )
    }
}