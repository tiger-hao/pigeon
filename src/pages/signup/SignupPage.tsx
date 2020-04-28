import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { SignupForm } from 'components/SignupForm/SignupForm';

export const SignupPage = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <h1>Sign Up</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4}>
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
};
