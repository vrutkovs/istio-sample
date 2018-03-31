import React from 'react';

class NameLabel extends React.Component {

  static fetchData(match) {
    var url = 'http://backend:8000/stranger'

    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json()['message'];
    })
  }

  constructor() {
    super();
    this.state = {
      message: 'Fetching data from backend, stay tuned...',
    };
  }

  componentDidMount() {
    this.constructor.fetchData(this.props.match).then(data => {
        this.setState({ data })
    })
  }

  render() {
    return (
      <h1>{this.state.message}</h1>
    );
  }
}
export default NameLabel;
