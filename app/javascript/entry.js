import routes from '@routes';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
const bootstrapApplication  = (routes) => (
  render(<AppContainer>{routes}</AppContainer>,document.getElementById('react-container')));
bootstrapApplication(routes);
if(module.hot){
  module.hot.accept();
  //bootstrapApplication(routes);
}
