import React, { Component } from "react";

import NavBar from "./components/NavBar";
import Intro from "./components/Intro"

const styles = {
  background: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "whitesmoke"
  },
  container: {
    minHeight: "100vh",
    width: "360px",
    margin: "auto",
    backgroundColor: "#E7E7E7"
  }
};

class App extends Component {
  render() {
    return (
      <div style={styles.background}>
        <div style={styles.container}>
          <NavBar />
          <Intro />
        </div>
      </div>
    );
  }
}

export default App;
