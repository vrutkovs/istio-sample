import React from 'react';
import ReactDOM from 'react-dom';
import NameLabel from './NameLabel';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(NameLabel),
    document.getElementById('mount')
  );
});
