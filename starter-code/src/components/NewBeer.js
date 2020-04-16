import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class NewBeer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
      })
      .then((res) => {
        console.log(res)
        this.setState({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: '',
          contributed_by: '',
        })
      })
      .catch((error) => console.log(error))
  }

  render() {
    return (
      <div>
        <Container>
          <Card style={{ margin: '5px' }}>
            <Card.Body>
              <Card.Title>Create Your Own Beer</Card.Title>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control name="name" type="text" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Tagline</Form.Label>
                  <Form.Control name="tagline" type="text" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control name="first_brewed" type="text" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>First Brewed</Form.Label>
                  <Form.Control name="first_brewed" type="text" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Brewer's Tips</Form.Label>
                  <Form.Control name="brewers_tips" type="text" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>"Attenuation Level"</Form.Label>
                  <Form.Control name="attenuation_level" type="number" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Creator</Form.Label>
                  <Form.Control name="contributed_by" type="text" onChange={this.handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit" size="sm" block>
                  Submit
                </Button>
              </Form>
              <br />
              <Link to={'/'}>
                <Button variant="secondary" size="sm" block>
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
