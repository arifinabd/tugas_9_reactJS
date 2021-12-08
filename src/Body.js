import React, { Component } from "react";
import {
  Col,
  Container,
  ProgressBar,
  Row,
  Spinner,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";

class Body extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3>Rumor Transfer Pemain</h3>
          </Col>
          <Col md="auto"></Col>
          <Col xs lg="1">
            <Spinner animation="border" variant="success" />
            <Spinner animation="grow" variant="success" />
          </Col>
        </Row>

        <Tabs defaultActiveKey="semua" id="uncontrolled-tab-example">
          <Tab eventKey="semua" title="Semua Transfer">
            <br />
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Pemain</th>
                  <th>Tim</th>
                  <th>Transfer</th>
                  <th>Proses Transfer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>MAROUANE FELLANI</td>
                  <td>MANCHESTER UNITED</td>
                  <td>SHANDONG LUNENG</td>
                  <td>
                    <ProgressBar animated now={85} label="85%" />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>LUIS NANI</td>
                  <td>SPORTING CP</td>
                  <td>ORLANDO CITY</td>
                  <td>
                    <ProgressBar animated now={55} label="55%" />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>MAREK HAMSIK</td>
                  <td>NAPOLI</td>
                  <td>DALIAN YIFANG</td>
                  <td>
                    <ProgressBar animated now={95} label="95%" />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>SARDAR AZMOUN</td>
                  <td>RUBIN KAZAN</td>
                  <td>ZENIT ST PETERSBURG</td>
                  <td>
                    <ProgressBar animated now={100} label="100%" />
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>MICHY BATSHUAYI</td>
                  <td>CHELSEA</td>
                  <td>CRYSTAL PALACE</td>
                  <td>
                    <ProgressBar animated now={50} label="50%" />
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>LUCAS PIAZON</td>
                  <td>CHELSEA</td>
                  <td>CHIEVO</td>
                  <td>
                    <ProgressBar animated now={100} label="100%" />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="inggris" title="Liga Primer Inggris">
            <h1>LIGA PRIMER INGGRIS</h1>
          </Tab>
          <Tab eventKey="SeriaA" title="Serie A">
            <h1>SERIE A</h1>
          </Tab>
          <Tab eventKey="Primera" title="Divisi Primera">
            <h1>DIVISI PRIMERA</h1>
          </Tab>
          <Tab eventKey="bundesliga" title="Bundesliga">
            <h1>BUNDESLIGA</h1>
          </Tab>
          <Tab eventKey="liga1" title="Liga 1 Indonesia">
            <h1>LIGA 1</h1>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default Body;
