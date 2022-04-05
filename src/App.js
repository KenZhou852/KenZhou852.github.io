import React, { useEffect, useState, Component } from "react";
import { Time } from "./Time.js";
import "./App.css";
import { FMAPrediction } from "./FMAPrediction.js";

function Pause(props) {
  if (props.isPaused) {
    return <p id="pause-indicator">Paused</p>;
  }
  return <div />;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 1800,
      lastFMA: 1782,
      paused: true,
      phase: "Red",
      phaseOnFMA: "Red",
    };
    this.clickFMA = this.clickFMA.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (!this.state.paused) {
      this.setState((state) => ({ ...state, timer: state.timer - 1 }));
    }
  }

  pauseTimer() {
    if (!this.state.paused) {
      this.setState((state) => ({ ...state, paused: true }));
    } else {
      this.setState((state) => ({ ...state, paused: false }));
    }
  }

  reset() {
    this.setState((state) => ({
      timer: 1800,
      lastFMA: 1782,
      paused: true,
      phase: "Red",
      phaseOnFMA: "Red",
    }));
  }

  clickFMA() {
    this.setState((state) => ({
      ...state,
      lastFMA: state.timer,
      phaseOnFMA: state.phase,
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Time time={this.state.timer} id="timer" />
          <Pause isPaused={this.state.paused} />
        </header>
        <div className="App-body">
          <div className="Phase">
            <div id="Phase-indicator">
              <h3>Current Phase</h3>
              <div className={this.state.phase} id="Phase-color">
                {this.state.phase}
              </div>
            </div>
            <div className="Phase-button-list">
              <button
                className="Phase-button"
                onClick={() => {
                  this.setState((state) => ({ ...state, phase: "Red" }));
                }}
              >
                Red
              </button>
              <button
                className="Phase-button"
                onClick={() => {
                  this.setState((state) => ({ ...state, phase: "Pink" }));
                }}
              >
                Pink 30%
              </button>
              <button
                className="Phase-button"
                onClick={() => {
                  this.setState((state) => ({ ...state, phase: "Yellow" }));
                }}
              >
                Yellow 20%
              </button>
            </div>
            <div id="FMA-button-list">
              <div className="time-button-list">
                <div id="time-input">
                  <input className="time-input-box" id="minute-input"></input>
                  <p>:</p>
                  <input className="time-input-box" id="second-input"></input>
                </div>
                <button
                  className="change-time-button"
                  onClick={() => {
                    let newTime =
                      parseInt(document.getElementById("minute-input").value) *
                        60 +
                      parseInt(document.getElementById("second-input").value);
                    document.getElementById("minute-input").value = "";
                    document.getElementById("second-input").value = "";
                    this.setState((state) => ({ ...state, timer: newTime }));
                  }}
                >
                  Change Time
                </button>
              </div>
              <div className="Utility-button-list">
                <button
                  className="Utility-button"
                  id="FMA"
                  onClick={this.pauseTimer}
                >
                  Pause
                </button>
                <button
                  className="Utility-button"
                  id="FMA"
                  onClick={this.reset}
                >
                  Reset
                </button>
                <button
                  className="Utility-button"
                  id="FMA"
                  onClick={this.clickFMA}
                >
                  FMA
                </button>
              </div>
            </div>
          </div>
          <div className="Prediction">
            <h2>FMA Time:</h2>
            <FMAPrediction
              FMAPhase={this.state.phaseOnFMA}
              FMA={this.state.lastFMA}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
