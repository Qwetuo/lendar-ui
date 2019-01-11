import React, { Component } from "react";

const flipCardStyle = {
  width: "250px",
  color: "whitesmoke",
  textAlign: "center",
  margin: "5px auto",
  padding: "5px"
};

const freeTime = ["STUDYING", "HAVING HOLIDAYS", "FREELANCING", "SEEKING JOB"];
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

class RenderFlip extends Component {
  constructor() {
    super();
    this.launchRenderer();
    this.state = {
      arr: [],
      currItem: 0
    };
  }

  componentDidMount = () => {
    if (this.props.render === "freeTime") {
      this.setState({
        arr: freeTime
      });
    }
  };

  launchRenderer() {
    setInterval(
      function() {
        this.setState({
          currItem: this.state.currItem + 1
        });
        if (this.state.currItem >= this.state.arr.length) {
          this.setState({
            currItem: 0
          });
        }
      }.bind(this),
      3000
    );
  }

  render() {
    return (
      <div
        style={{
          ...flipCardStyle,
          backgroundColor: colors[this.state.currItem]
        }}
      >
        <p>{this.state.arr[this.state.currItem]}</p>
      </div>
    );
  }
}

export default RenderFlip;
