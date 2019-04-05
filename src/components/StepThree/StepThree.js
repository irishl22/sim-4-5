import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import store, { UPDATE_MORTGAGE, UPDATE_RENT } from './../ducks/store'


class StepThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mortgage: 0,
            rent: 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        store.subscribe(() => {
          const reduxState = store.getState()
          this.setState({
              mortgage: reduxState.mortgage,
              rent: reduxState.rent
          })
        })
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
          imgUrl: ''
        })
        this.props.history.push('/');
      }).catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <form>
            <input name="mortgage" value={this.state.mortgage} type="number" onChange={e => this.handleChange("mortgage", e.target.value)}/>  
            <input name="rent" value={this.state.rent} type="number" onChange={e => this.handleChange("rent", e.target.value)}/>  
            <button onChange={this.handleAdd}>Complete</button>
            <button onChange={this.handlePrevious}>Previous</button>

        </form> 
      </div>
    )
  }
}

export default StepThree
