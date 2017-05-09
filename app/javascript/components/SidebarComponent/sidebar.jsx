import React,{Component} from 'react';
import styles from './style.scss';
class SidebarComponent extends Component{
  render(){
    return (
      <h1 className={styles['sidebar']}>SidebarComponent</h1>
    )
  }
}
export default SidebarComponent;
