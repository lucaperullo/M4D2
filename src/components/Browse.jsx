import React, { Component } from "react";
import items from "../data/menu.json";
import { Container, Row, Col, Carousel } from "react-bootstrap";

class Home extends Component {
  render() {
    console.log("myItems", items);

    return (
      <Container>
        <Row className="justify-content-center mt-3">
          <Col xs={6}>
            <h1>Welcome to my ReactApp</h1>
            <p className="lead">The best app you can find on the web!</p>
            <hr className="my-2" />
            <p>Come and visit us, we can only cook app!</p>
            <Carousel>
              {items.map((item) => (
                <Carousel.Item key={item.id}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt={item.name}
                  />
                  <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;