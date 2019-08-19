import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import FlipCard from './components/FlipCard'
import About from './components/About'
import BackVid from './components/BackVid'


const AppDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-size: 1.15em;
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <AppDiv>
      <Router>
        <Header />
        <Body>
          <Switch>
            <Route exact path="/" component={BackVid} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={FlipCard} />
          </Switch>
        </Body>
        <Footer />
      </Router>
    </AppDiv>
  );
}

export default App;
