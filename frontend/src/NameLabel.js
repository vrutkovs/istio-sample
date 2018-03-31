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

    var fromServer = fetch('/hello')
    .then((response) => response.text())
    .then(function(message) {
      that.setState({ message: message });
    }).catch(function(err) {
      console.log("Error " + err);
    });
  }

  render() {
    return (
      <h1>{this.state.message}</h1>
    );
  }
}
export default NameLabel;
