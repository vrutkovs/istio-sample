import React from 'react';

class NameLabel extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Fetching data from backend, stay tuned...',
    };
  }

  componentDidMount() {
    var that = this;
    var url = 'http://backend:8000/stranger'

    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      that.setState({ message: data.message });
    });
  }

  render() {
    return (
      <h1>{this.state.message}</h1>
    );
  }
}
export default NameLabel;
