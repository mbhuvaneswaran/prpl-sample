import React,{ Component } from 'react';
import styles from './style.scss';
class HeaderComponent extends Component{
  render(){
    return (
      <h1 className={styles['header']}>HeaderComponent</h1>
    )
  }
}
export default HeaderComponent;
