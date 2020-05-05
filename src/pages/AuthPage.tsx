import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export interface AuthPageProps {
  header: string;
}

export const AuthPage: React.FC<AuthPageProps> = ({ header, children }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <h1>{header}</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};
