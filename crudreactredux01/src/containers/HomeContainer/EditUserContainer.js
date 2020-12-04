import React from "react";
import { Col, Container, Row } from "reactstrap";
import { BackComponent } from "../../components";

const EditUserContainer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <BackComponent to="/" />
          </Col>
          <Col>
            <h1>Edit User</h1>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditUserContainer;
