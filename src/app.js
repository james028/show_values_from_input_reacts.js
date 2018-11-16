import React, { Component } from "react";
import Form from "./form";

class App extends Component {
  state = {
    array: []
  };

  submit = e => {
    const newArray = [...this.state.array];
    newArray.push(e);

    this.setState({
      array: newArray
    });
    //console.log(this.state.array);
  };

  render() {
    return (
      <div>
        <Form obsubmit={this.submit} />
        {this.state.array.map((e, i) => {
          return (
            <div key={i}>
              <div>First value: {e.first_name}</div>
              <div>Second value: {e.last_name}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
