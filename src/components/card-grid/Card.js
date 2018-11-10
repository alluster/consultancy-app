import React, { Component } from 'react';
import { Link } from 'react-router-dom' 

class Card extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
    }
  }
  
render() { 
  console.log(this.props.data)
       return (
      <Link to={ `/projects/${this.props.data.fields.slug}` }>
        <div className="card margin-bottom-50">
        <img className="card-image" src={this.props.data.fields.mainImage.fields.file.url} alt="" />
        <div className="card-container">
          <p>{this.props.data.fields.name}</p> 
          <div className="margin-top-25">
          <p className="lighter">React, Mongo DB, Ux Design</p> 
          </div>
        </div>
      </div>
      </Link>
    )
  }
}
export default Card;
