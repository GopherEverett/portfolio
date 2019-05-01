import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import FlipCard from './components/FlipCard'


const AppDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-size: 1.15em;
`;

function App() {
  return (
    <AppDiv>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/projects" component={FlipCard}/>
          </Switch>
        </div>
        <Footer />
      </Router>
    </AppDiv>
  );
}

export default App;
