import React, { Component } from 'react'

class House extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
  render() {
    return (
      <div>
        {this.props.house.name}
        {this.props.house.address}
        {this.props.house.city}
        {this.props.house.state}
        {this.props.house.zipcode}
        <button onClick={this.props.deleteHouseFn}>Delete</button>
      </div>
    )
  }
}

export default House
