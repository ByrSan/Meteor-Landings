import React, { Component } from "react"
import PropTypes from "prop-types"

export class Search extends Component {
  state = {
    text: "",
  }
  static propTypes = {
    searchByName: PropTypes.func.isRequired,
    clearResults: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  onSubmit = (event) => {
    event.preventDefault()
    if(this.state.text === "")
    // this.props.setAlert('Please enter a name', 'light')
    this.props.searchByName(this.state.text)
    this.setState({text: ""})
}

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search by Name"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-primary btn-block"
          />
        </form>
        {this.props.showClear && <button
          onClick={this.props.clearResults}
          className="btn btn-light btn-block"
          
        >
          Clear Results
        </button>}
        
      </div>
    )
  }
}

export default Search
