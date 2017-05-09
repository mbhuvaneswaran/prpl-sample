import React,{Component} from 'react';
import styles from './style.scss';
class FooterComponent extends Component{
  render(){
    return (
      <h2 className={styles['footer']}>Footer</h2>
    )
  }
}
export default FooterComponent;
