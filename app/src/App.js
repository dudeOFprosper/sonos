import React from 'react';
import logo from './images/dashlane.png';
import bill from './images/bill.png';
import perry from './images/bill.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Body">
        <h1>Welcome to Dashlane's Sonos Bot</h1>
        <p>
          Do you want to control our sonos without dealing with the Sonos phone
          app? Well you are in luck! With our new Slack bot, you can simply use
          slack commands to control all our Sonos stereos!
        </p>
        <h2>How to Use</h2>
        <h2>Advanced Options</h2>
        <h2>FAQs</h2>
        <h2>Contact Us</h2>
        <div class="Bios">
          <div class="Bio">
            <img src={bill} className="photo" alt="Best Dart Player" />
            <h3>Bill Pond</h3>
            <p>Bill Pond is avid dart player and loves to eat Doritos.</p>
          </div>
          <div class="Bio">
            <img src={perry} className="photo" alt="Best Dart Player" />
            <h3>Perry Wortman</h3>
            <p>Perry is the grooviest base player of all time.</p>
          </div>
          <div class="Bio">
            <img src={bill} className="photo" alt="Best Dart Player" />
            <h3>Michael Grinthal</h3>
            <p>Bill Pond is avid dart player and loves to eat Doritos.</p>
          </div>
          <div class="Bio">
            <img src={bill} className="photo" alt="Best Dart Player" />
            <h3>Alexander Singleton</h3>
            <p>Bill Pond is avid dart player and loves to eat Doritos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
