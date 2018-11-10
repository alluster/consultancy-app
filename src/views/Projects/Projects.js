import React, { Component } from 'react';
import Navigation from '../../components/navigation/Navigation'
import CardGrid from '../../components/card-grid/CardGrid';
import { connect } from 'react-redux';
import { fetchProjects } from '../../actions/index';

const windowSize = window.innerWidth;

class Projects extends Component {
 
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    console.log(this.props.projects)

    return (
      <div>
          <Navigation dark windowSize={windowSize} />
          <div className="container">
             <CardGrid  data={this.props.projects} />
          </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { projects: state.projects.all };
}
export default connect(mapStateToProps, { fetchProjects })(Projects);
