import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './styles.css';

const SignupPage = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <h1>Sign Up</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4}>
          <Form className="signup">
            <Form.Group controlId="signup-email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group controlId="signup-username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="signup-password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group controlId="signup-confirm-password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
