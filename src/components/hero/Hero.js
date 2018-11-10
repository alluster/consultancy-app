import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LazyLoad from 'react-lazy-load';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: "not loading"
    }
  }
  handleImageLoaded() {
    this.setState({loading: "loading"})
}
  render() { 
    const heroImage = {
        backgroundImage : 'linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5) ), url(' + this.props.heroImage + ')'
    }
 console.log(this.props.data)
    return (
        <LazyLoad 
        debounce={false}
        offsetVertical={500}
        >
        <div className="hero-image" style={heroImage} onLoad={this.handleImageLoaded.bind(this)}  >
            <div className="content container">
                <Grid>
                    <Row middle="md">
                        <Col xs={12} sm={12} md={12} lg={5}>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={5}>
                            <h1>{this.props.heroHeader}</h1>
                            <p  className="margin-top-50">{this.props.heroBody}</p>
                            {
                            this.props.heroButtonText ?
                            <button className="margin-top-50 button-outline-light">{this.props.heroButtonText}</button> : null
                            }
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
        </LazyLoad>
    )
  }
}
export default Hero;
