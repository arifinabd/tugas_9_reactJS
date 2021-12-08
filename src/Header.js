import React, { Component } from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Liga Inggris</Breadcrumb.Item>
              <Breadcrumb.Item href="/" active>
                Transfer Pemain
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
