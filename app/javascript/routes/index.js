import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import MainComponent from '@components/MainComponent';
import styles from '../../styles/main.scss';
const routes = (
  <BrowserRouter>
    <Route path='/' component={MainComponent}>
    </Route>
  </BrowserRouter>
)
export default routes;
