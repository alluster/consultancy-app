import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../../actions/index';

import Hero from '../../components/hero/Hero'
import Navigation from '../../components/navigation/Navigation';
import ContentBlock from '../../components/content-block/ContentBlock';

class Project extends Component {
    componentDidMount() {
     this.props.fetchProject(this.props.match.params.projectName)
      }
      
  
    
  render() {
      console.log(this.props.contentBlock)
      const contentBlocks = this.props.contentBlock ? this.props.contentBlock.map(function(data, idx) {
        return ([
          <ContentBlock 
          key={idx} 
          testimonial={data.fields.testimonial} 
          testimonialBody={data.fields.testimonialBody} 
          image={data.fields.image.fields.file.url} 
          />

       
        ]);
     }) : null
    return (    
      <div>
        <Navigation />
        <Hero 
          heroImage={this.props.heroImage}
          heroHeader={this.props.heroHeader}
          heroBody={this.props.heroBody}
          heroButtonText={this.props.heroButtonText}

          />
        {contentBlocks}

      </div>
    )
  }
}
function mapStateToProps(state) {
  return { 
    heroImage: state.project.heroImage,
    heroBody: state.project.heroBody,
    heroButtonText: state.project.heroButtonText,
    heroHeader: state.project.heroHeader,
    testimonial: state.project.testimonial,
    testimonialBody: state.project.testimonialBody,
    image: state.project.image,
    contentBlock: state.project.contentBlock

   };
}

export default connect(mapStateToProps, { fetchProject }) (Project);
