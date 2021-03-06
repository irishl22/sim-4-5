import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    })
  }

  handleAdd = (e) => {
    e.preventDefault()
    axios.post('/api/house', this.state)
      .then(res => {
        this.setState({
          name: '',
          address: '',
          city: '',
          state: '',
          zipcode: 0
        })
        this.props.history.push('/');
      }).catch(err => console.log(err))
  }

  render() {
    return (
      <div>
       <div>
        <form>
            <input name="name" value={this.state.name} type="text" onChange={e => this.handleChange("name", e.target.value)}/>
            <input name="address" value={this.state.address} type="text" onChange={e => this.handleChange("address", e.target.value)}/>
            <input name="city" value={this.state.city} type="text" onChange={e => this.handleChange("city", e.target.value)}/>
            <input name="state" value={this.state.state} type="text" onChange={e => this.handleChange("state", e.target.value)}/>
            <input name="zipcode" value={this.state.zipcode} type="number" onChange={e => this.handleChange("zipcode", e.target.value)}/>
            <button onChange={this.handleAdd}>Complete</button>
        </form> 
      </div>
        <Link to="/">
            <button>Cancel</button>
        </Link>
      </div>
    )
  }
}

export default Wizard
