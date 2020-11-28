import React, { Component } from "react";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import {
  Container,
  Row,
  Col,
  Card,
  Nav,
  Button,
  Jumbotron,
  FormControl,
} from "react-bootstrap";
import Modale from "./Modale";

let books = {
  fantasy,
  horror,
  history,
  romance,
  scifi,
};

class Home extends Component {
  state = {
    category: "fantasy",
    books,
    open: false,
    clickBook: false,
    comments: [],
    loading: true,
  };
  baseURL = "https://striveschool-api.herokuapp.com/api/comments";
  handleSearchQuery = (searchQuery) => {
    let category = this.state.category;

    if (searchQuery) {
      let filteredBooks = books[category].filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      this.setState({ books: filteredBooks.slice(0, 12) });
    } else {
      this.setState({ books: books[category].slice(0, 12) });
    }
  };
  getComments = async () => {
    const { clickBook } = this.state;
    try {
      let response = await fetch(this.baseURL + "/" + clickBook.asin);
      response = await response.json();
    } catch (e) {}
  };
  changeCategory = (category) => {
    this.setState({ category });
  };
  clickBook = (book) => {
    this.setState({ open: true, clickBook: book });

    console.log(this.state);
  };

  toggleModal = () => {
    this.setState({ open: !this.state.open });
  };
  onOk = () => {
    this.setState({ clickBook: false, open: false });
  };
  componentDidMount = () => {
    this.getComments();
  };
  render() {
    const { category, books, open, clickBook } = this.state;
    const selectedBooks = books[category];

    return (
      <>
        <Container fluid className="wrapper">
          <Jumbotron fluid>
            <Container>
              <h1
                style={{ opacity: "1", color: " black" }}
                className="text-center"
              >
                Welcome to read.io
              </h1>
              <p
                style={{
                  opacity: "0.7",
                  color: " black",
                  fontWeight: "100",
                  fontSize: "18px",
                  marginTop: "-100px",
                }}
                className="text-center"
              >
                Take a break and pick one of our books!
              </p>
            </Container>
          </Jumbotron>
        </Container>
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#third">
                  <Nav.Item>
                    <Nav.Link onClick={() => this.changeCategory("fantasy")}>
                      Fantasy
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link onClick={() => this.changeCategory("history")}>
                      History
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link onClick={() => this.changeCategory("horror")}>
                      Horror
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link onClick={() => this.changeCategory("romance")}>
                      Romance
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link onClick={() => this.changeCategory("scifi")}>
                      Sci-fi
                    </Nav.Link>
                  </Nav.Item>
                  <FormControl
                    style={{ marginBottom: "30px" }}
                    placeholder="Search a book.."
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    onChange={(e) => this.handleSearchQuery(e.target.value)}
                  />
                </Nav>
              </Card.Header>
              <Card.Body id="fantasy">
                <h1 style={{ textAlign: "center" }}>
                  {" "}
                  {category.substring(0, 1).toUpperCase() +
                    category.substring(1, category.length)}{" "}
                  books
                </h1>
                <Row xs={1} sm={2} md={4} lg={5} xl={6}>
                  {selectedBooks.map((item) => (
                    <Card
                      onClick={() => this.clickBook(item)}
                      style={{ width: "18rem" }}
                      className={{ Col }}
                    >
                      <Card.Img variant="top" src={item.img} />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.category}</Card.Text>
                        <Button variant="primary">{item.price}</Button>
                      </Card.Body>
                    </Card>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Modale
          open={open}
          toggleModal={this.toggleModal}
          clickBook={clickBook}
          onOk={this.onOk}
        />
      </>
    );
  }
}

export default Home;
