import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/houses').then(res => {
          this.setState({
            houses: res.data
          })
        }).catch(err => console.log('error on mount', err))
      }

  render() {
      console.log(this.state.houses)
    return (
      <div>
        <Link to="/wizard">
            <button>Add New Property</button>
        </Link>
        <Link to="/">
            <button>Cancel</button>
        </Link>
        {this.state.houses.map((house, i) => <House key={i} house={house} />)}
      </div>
    )
  }
}

export default Dashboard
