import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

const styles = {
  container: {
    position: "relative",
    background: "white",
    width: "78%",
    top: "-15px",
    left: "11%",
    borderRadius: "20px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "5%"
  },
  jobsFilterBar: {
    background: "#F7F5F5",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
    textAlign: "center"
  }
};

const options = [
  { key: 1, text: "View All Jobs", value: "all" },
  { key: 2, text: "View Available Jobs", value: "available" },
  { key: 3, text: "View Filtered Jobs", value: "filtered" },
  { key: 4, text: "View Applied Jobs", value: "applied" },
  { key: 5, text: "View Completed Jobs", value: "completed" }
];

class JobsContainer extends Component {
  constructor() {
    super();
    this.state = {
      value: "all"
    };
  }

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div style={styles.container}>
        <Dropdown
          selection
          fluid
          options={options}
          value={this.state.value}
          style={styles.jobsFilterBar}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default JobsContainer;
