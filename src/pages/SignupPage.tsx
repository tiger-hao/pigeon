import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SignupForm } from 'components/SignupForm';

export const SignupPage: React.FC = () => {
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
