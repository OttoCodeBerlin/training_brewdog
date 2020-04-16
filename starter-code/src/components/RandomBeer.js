import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function Beer(props) {
  const beer = props.beers[Math.floor(Math.random() * props.beers.length)]

  if (beer === undefined) {
    return <small>Loading</small>
  } else {
    return (
      <div>
        <Container>
          <Card style={{ margin: '5px' }}>
            <Card.Img variant="top" src={beer.image_url} style={{ width: '20%', margin: '20px' }} />
            <Card.Body>
              <Card.Title>{beer.name}</Card.Title>
              <Card.Text style={{ color: 'grey' }}>{beer.tagline}</Card.Text>
              <Card.Text>{beer.description}</Card.Text>
              <Card.Text style={{ color: 'grey' }}>First brewed: {beer.first_brewed}</Card.Text>
              <Card.Text>{beer.brewers_tips}</Card.Text>
              <Card.Text>
                Food Pairings:
                {beer.food_pairing.map((e, idx) => (
                  <li key={idx} style={{ margin: '5px' }}>
                    {e}
                  </li>
                ))}
              </Card.Text>
              <Link to={'/'}>
                <Button variant="primary" size="sm" block>
                  Back to Home
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Container>
      </div>
    )
  }
}
