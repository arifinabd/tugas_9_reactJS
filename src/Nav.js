import React, { Component } from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

class Navigasi extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Akses Sport</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Berita</Nav.Link>
            <Nav.Link href="/">Live Scores</Nav.Link>
            <NavDropdown title="Piala & Liga" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">1</NavDropdown.Item>
              <NavDropdown.Item href="/">2</NavDropdown.Item>
              <NavDropdown.Item href="/">3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Transfer Pemain</Nav.Link>
            <Nav.Link href="/">Tim</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigasi;
