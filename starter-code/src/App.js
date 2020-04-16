import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Beers from './components/Beers'
import Beer from './components/Beer'
import NewBeer from './components/NewBeer'
import RandomBeer from './components/RandomBeer'
import Navbar from 'react-bootstrap/Navbar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: [],
      searchString: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      this.setState({ beers: res.data })
    })
  }

  handleChange = (e) => {
    this.setState({ searchString: e.target.value })
  }

  render() {
    return (
      <div>
        <div>
          <Navbar style={{ width: '30%', marginLeft: '25%' }} bg="none">
            <Navbar.Brand>
              <Link to="/" style={{ color: 'black' }}>
                Welcome to Klimpy's Brewery
              </Link>
            </Navbar.Brand>
          </Navbar>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/beers"
                render={(props) => (
                  <Beers
                    {...props}
                    beers={this.state.beers}
                    handleChange={this.handleChange}
                    search={this.state.searchString}
                  />
                )}
              />
              <Route exact path="/beers/:id" render={(props) => <Beer {...props} beers={this.state.beers} />} />
              <Route path="/random-beer" render={(props) => <RandomBeer {...props} beers={this.state.beers} />} />
              <Route path="/new-beer" component={NewBeer} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default App
