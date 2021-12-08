import React, { Component } from "react";
import {
  Button,
  Col,
  Collapse,
  Container,
  Form,
  OverlayTrigger,
  Pagination,
  Popover,
  Row,
} from "react-bootstrap";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      muncul: false,
    };
    this.handeleCollaps = this.handeleCollaps.bind(this);
  }

  handeleCollaps() {
    this.setState(() => {
      return { muncul: !this.state.muncul };
    });
  }

  render() {
    const popoverTest = (
      <Popover>
        <Popover.Title as="h3">Informasi Website</Popover.Title>
        <Popover.Content>
          Website ini dibuat untuk memudahkan dalam pencarian informasi terkini
          tentang berita olahraga
        </Popover.Content>
      </Popover>
    );
    return (
      <Container>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item>{14}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
        <Form inline>
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={popoverTest}
          >
            <Button className="mr-sm-2">Informasi</Button>
          </OverlayTrigger>
          <Button variant="primary" onClick={this.handeleCollaps}>
            Versi Website
          </Button>
        </Form>
        <Row>
          <Col sm={1}></Col>
          <Col sm={11}>
            <Collapse in={this.state.muncul}>
              <p> Akses Sport V1.0</p>
            </Collapse>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
