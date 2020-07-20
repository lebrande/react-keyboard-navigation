import React from 'react';
import { render } from 'react-dom';
import 'bulma/css/bulma.css';
import App from './components/App/App';
import './variables.css';
import './spatial-navigation';

render(
  <App />,
  document.getElementById('root'),
);
