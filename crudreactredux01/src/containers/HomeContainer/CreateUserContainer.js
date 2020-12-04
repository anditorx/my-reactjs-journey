import React from "react";
import { Col, Container, Row } from "reactstrap";
import { BackComponent } from "../../components";

const CreateUserContainer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <BackComponent to="/" />
          </Col>
          <Col>
            <h1>Create User</h1>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateUserContainer;
