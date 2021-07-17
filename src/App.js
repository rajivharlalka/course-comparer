import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./App.scss";
import Branch from "./Branch/Branch";

class App extends Component {
  state = {
    compareToggle: false,
  };

  changeMode = () => {
    const tempCompareToggle = this.state.compareToggle;
    this.setState({
      compareToggle: !tempCompareToggle,
    });
  };

  render() {
    return (
      <Container fluid className="text-center">
        <h1>IITKGP Course Comparer</h1>
        <label>
          Compare : &nbsp;
          <input type="checkbox" onChange={this.changeMode}></input>
        </label>
        <Row>
          <Col className="mx-auto" xs={6}>
            <Branch />
          </Col>
          {this.state.compareToggle ? (
            <Col>
              <Branch />
            </Col>
          ) : null}
        </Row>
      </Container>
    );
  }
}

export default App;
