import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bulma/css/bulma.css';
import Root from './components/Root/Root';
import './variables.css';

render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  document.getElementById('root'),
);
