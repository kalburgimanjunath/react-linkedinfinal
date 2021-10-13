import React from 'react';
import './style.css';
import './css/index.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Chat, Explore, Notification, Profile } from './pages/index';
export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/notification">
            <Notification />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/*">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
