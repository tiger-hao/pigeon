import React from 'react';
import { Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';

export interface AuthPageProps {
  header: string;
}

export const AuthPage: React.FC<AuthPageProps> = ({ header, children }) => {
  const loggedIn = !!useSelector((state: RootState) => state.auth.token);

  return (
    <>
      {loggedIn
        ?
        <Redirect to="/" />
        :
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
      }
    </>
  );
};
