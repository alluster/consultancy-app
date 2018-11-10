import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom' 

class Navigation extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      mobileOpen: false
    }
    this.toggleClass = this.toggleClass.bind(this)
  }
    
  
  toggleClass() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  render() { 
    const { dark, windowSize } = this.props
    const classes = dark ? classNames( "topnav", { "responsive": windowSize < 500 && this.state.mobileOpen }) : classNames( "topnav-light", { "responsive": windowSize < 500 && this.state.mobileOpen });
   
    return (
       <div className={classes}>
            <div className="container">
              <a onClick={this.toggleClass} className="icon">
                  {
                  !this.state.mobileOpen ? <i className="fa fa-bars"></i> : <i className="fa fa-close"></i>
                  }
              </a>
                  <Link onClick={this.toggleClass} to="/">Our Consultancy</Link>
                  <Link onClick={this.toggleClass} to="/projects">Projects</Link>
                  <Link onClick={this.toggleClass} to="/about">About</Link>
                  <Link onClick={this.toggleClass} to="/contact">Contact</Link>

            </div>
      </div>  
    )
  }
}
export default Navigation;
