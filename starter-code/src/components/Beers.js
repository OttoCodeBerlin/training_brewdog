import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { Link } from 'react-router-dom'

export default function Beers(props) {
  return (
    <div>
      <Container>
        <InputGroup className="m-3" style={{ left: '-16px' }}>
          <InputGroup.Prepend>
            <InputGroup.Text>Search Beer Name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type="text"
            name="search"
            value={props.search}
            onChange={(e) => props.handleChange(e)}
          />
        </InputGroup>
        {props.beers
          .filter((beer) => beer.name.toUpperCase().includes(props.search.toUpperCase()))
          .map((beer, idx) => (
            <Card key={idx} style={{ margin: '5px' }}>
              <Card.Img variant="top" src={beer.image_url} style={{ width: '20%', margin: '20px' }} />
              <Card.Body>
                <Card.Title>{beer.name}</Card.Title>
                <Card.Text>{beer.tagline}</Card.Text>
                <Link to={`/beers/${beer._id}`}>
                  <Button variant="secondary" size="sm" block>
                    See Details
                  </Button>
                </Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Crafted by {beer.contributed_by}</small>
              </Card.Footer>
            </Card>
          ))}
      </Container>
    </div>
  )
}
