import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

import beers from './images/beers.png'
import newbeer from './images/new-beer.png'
import randombeer from './images/random-beer.png'

export default function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Image src={beers} fluid />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>
              <Link style={{ color: 'black' }} to="/beers">All Beers</Link>
            </h1>
            <p style={{ color: 'lightgrey' }}>
              Aliquip ipsum aute exercitation consequat duis cupidatat enim. Veniam sunt enim ad irure elit aute labore
              aliquip fugiat dolor. Fugiat non sint id qui exercitation ut do id. Elit et ut minim nisi. Aliquip ea
              excepteur do est velit. In excepteur fugiat in Lorem non minim culpa velit dolore aliqua ad occaecat.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src={randombeer} fluid />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>
              <Link style={{ color: 'black' }} to="/random-beer">Random Beer</Link>
            </h1>
            <p style={{ color: 'lightgrey' }}>
              Aliquip ipsum aute exercitation consequat duis cupidatat enim. Veniam sunt enim ad irure elit aute labore
              aliquip fugiat dolor. Fugiat non sint id qui exercitation ut do id. Elit et ut minim nisi. Aliquip ea
              excepteur do est velit. In excepteur fugiat in Lorem non minim culpa velit dolore aliqua ad occaecat.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src={newbeer} fluid />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>
              <Link style={{ color: 'black' }} to="/new-beer">Create New Beer</Link>
            </h1>
            <p style={{ color: 'lightgrey' }}>
              Aliquip ipsum aute exercitation consequat duis cupidatat enim. Veniam sunt enim ad irure elit aute labore
              aliquip fugiat dolor. Fugiat non sint id qui exercitation ut do id. Elit et ut minim nisi. Aliquip ea
              excepteur do est velit. In excepteur fugiat in Lorem non minim culpa velit dolore aliqua ad occaecat.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
