import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LoginForm } from 'components/LoginForm';

export const LoginPage: React.FC = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <h1>Log In</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4}>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};
