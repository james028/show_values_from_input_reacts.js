import React, { Component } from "react";

class Form extends Component {
  state = {
    vl: {
      first_name: "",
      last_name: ""
    }
  };

  handleChange = e => {
    const newRent = {
      ...this.state.vl,
      [e.target.name]: e.target.value
    };
    this.setState({
      vl: newRent
    });
  };

  submitForm = e => {
    e.preventDefault();

    const newArraySub = { ...this.state.vl };
    this.props.obsubmit(newArraySub);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            name="first_name"
            onChange={this.handleChange}
            value={this.state.vl.first_name}
          />
          <br />
          <input
            type="text"
            name="last_name"
            onChange={this.handleChange}
            value={this.state.vl.last_name}
          />
          <br />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default Form;
