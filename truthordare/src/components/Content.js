import React, { Component } from 'react'
import { Container, Row, Col } from "reactstrap"


const Content = (props) => {
    return (
      <Container>
          <Row>
              <Col className="text-center" sm={{size: 12}}>
              {props.children}
              </Col>
          </Row>
      </Container>
        
      
    )
  }


export default Content;
