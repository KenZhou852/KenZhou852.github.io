import React, { useEffect, useState, Component } from "react";
export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 1800, rando: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((state) => ({ time: state.time - 1 }));
  }

  setTime(props) {
    this.setState({ time: props.time });
  }

  render() {
    if (this.state.time % 60 < 10) {
      return (
        <div>
          <h1>
            {Math.floor(this.state.time / 60)}:0{this.state.time % 60}
          </h1>
          <button
            onClick={() =>
              this.setState((state) => ({
                time: state.time,
                rando: state.rando + 1,
              }))
            }
          >
            click
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>
            {Math.floor(this.state.time / 60)}:{this.state.time % 60}
          </h1>
          <button
            onClick={() =>
              this.setState((state) => ({
                time: state.time,
                rando: state.rando + 1,
              }))
            }
          >
            click
          </button>
        </div>
      );
    }
  }
}
