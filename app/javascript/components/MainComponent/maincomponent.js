import React,{Component} from 'react';
import {Route} from 'react-router';
import { Link } from 'react-router-dom';
import HeaderComponent from '@components/HeaderComponent';
import SidebarComponent from '@components/SidebarComponent';
import LazyLoadComponent from '@components/LazyLoadComponent';
import styles from './style.scss';
class MainComponent extends Component{
  constructor(props){
    super(props);
    this.promiseElm = "";
    this.state={
      footerComponentPromise : ""};
  }
  componentDidMount(){
    let that  = this;
    that.promiseElm = import('@components/FirstComponent');
    this.setState({footerComponentPromise : import('@components/FooterComponent')});
  }
  render(){
    return (
      <div className={styles['app-container']}>
      <HeaderComponent/>
      <div className={styles["main-content"]}>
      <SidebarComponent/>
      <div className={styles['main']}>
      <Link to='/path1'>Path 1</Link>
      <LazyLoadComponent promise = {this.promiseElm}  callBack = {(component)=> {
        return <Route path='/path1' component={component}/>
      }}/>
      </div>
      </div>
      <LazyLoadComponent promise = {this.state.footerComponentPromise}/>
      </div>
     )
  }
}
export default MainComponent;
