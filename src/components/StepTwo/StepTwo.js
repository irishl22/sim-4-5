import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import store, { UPDATE_IMGURL} from './../ducks/store'



class StepTwo extends Component {
    constructor(props) {
        super(props);
        const reduxState = store.getState()
        this.state = {
            imgUrl: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        store.subscribe(() => {
          const reduxState = store.getState()
          this.setState({
              imgUrl: reduxState.imgUrl
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
            <input name="imageUrl" value={this.state.imageUrl} type="text" onChange={e => this.handleChange("imageUrl", e.target.value)}/>  
            <button onChange={this.handleNext}>Next</button>
            <button onChange={this.handlePrevious}>Previous</button>
        </form> 
      </div>
    )
  }
}

export default StepTwo
