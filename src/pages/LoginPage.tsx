import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
