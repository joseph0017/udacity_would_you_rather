import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap'

 const PageNotFound = () => {
  return (
      <>
    <Container className= "d-flex justify-content-center">
        <Row>
            <h1>
                Page not found
            </h1>
            <p>
            You can return <Link to="/">Home</Link>.
            </p>
        </Row>
    </Container>
    </>
  );
};
export default PageNotFound
