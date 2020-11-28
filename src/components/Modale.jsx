import React, { Component } from "react";
import { Modal, Card, Button, Form } from "react-bootstrap";
class Modale extends Component {
  render() {
    const { toggleModal, clickBook, open, onOk } = this.props;

    return (
      <Modal
        show={open}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={toggleModal}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h4 style={{ textAlign: "center" }}>{clickBook.title}</h4>
          <Card className="text-center d-flex">
            <img
              style={{
                alignSelf: "center",
                padding: "2rem",
                height: "70vh",
                width: "40vh",
              }}
              src={clickBook.img}
            ></img>
          </Card>
          <p style={{ textAlign: "center" }}>{clickBook.category}</p>
          <p style={{ textAlign: "center" }}>€{clickBook.price}</p>
        </Modal.Body>
        <Form.Control as="textArea" style={{ height: "20vh" }} placeholder="" />
        <Form inline>
          <Form.Label
            className="my-1 mr-2"
            htmlFor="inlineFormCustomSelectPref"
          >
            Rating
          </Form.Label>
          <Form.Control
            as="select"
            className="my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            custom
          >
            <option value="0">★</option>
            <option value="1">★★</option>
            <option value="2">★★★</option>
            <option value="3">★★★★</option>
            <option value="4">★★★★★</option>
          </Form.Control>
          <Button type="submit" className="my-1">
            Submit
          </Button>
        </Form>
        <Modal.Footer>
          {/* this.state.reviews.map((response) => <p>{response.comment}</p>); */}
          <Button onClick={toggleModal}>Cancel</Button>
          <Button onClick={onOk}>Ok</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Modale;
