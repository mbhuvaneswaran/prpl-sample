import React,{Component} from 'react';
class LazyLoadComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      component : ""
    }
    this.loaded = false;
  }
  componentWillReceiveProps(props){
    let that = this;
    if(props.promise){
      props.promise.then(function(Component){
        that.state.component = Component.default;
        that.forceUpdate();
      })
    }
  }
  render(){
    if(!this.state.component){
      return null;
    }
    if(this.props.callBack){
      return this.props.callBack(this.state.component);
    }
    let Component = this.state.component;
    return <Component/>
  }
}
export default LazyLoadComponent;
