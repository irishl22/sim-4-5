import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import store, { UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIPCODE} from './../ducks/store'

class StepOne extends Component {
    constructor(props) {
        super(props);
        const reduxState = store.getState()
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zipcode: reduxState.zipcode
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        store.subscribe(() => {
          const reduxState = store.getState()
          this.setState({
              name: reduxState.name,
              address: reduxState.address,
              city: reduxState.city,
              state: reduxState.state,
              zipcode: reduxState.zipcode
          })
        })
      }

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    })
  }

  handleNext

  render() {
    return (
      <div>
        <form>
            <input name="name" value={this.state.name} type="text" onChange={e => this.handleChange("name", e.target.value)}/>
            <input name="address" value={this.state.address} type="text" onChange={e => this.handleChange("address", e.target.value)}/>
            <input name="city" value={this.state.city} type="text" onChange={e => this.handleChange("city", e.target.value)}/>
            <input name="state" value={this.state.state} type="text" onChange={e => this.handleChange("state", e.target.value)}/>
            <input name="zipcode" value={this.state.zipcode} type="number" onChange={e => this.handleChange("zipcode", e.target.value)}/>
            <button onChange={this.handleNext}>Next</button>

        </form> 
      </div>
    )
  }
}

export default StepOne
