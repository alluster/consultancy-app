import React, { Component } from 'react';
import * as contentful from 'contentful'

import Hero from '../../components/hero/Hero'
import Navigation from '../../components/navigation/Navigation';
import ContentBlock from '../../components/content-block/ContentBlock';
import ContactCard from '../../components/contact-card/ContactCard';
import ContactCardGrid from '../../components/contact-card/ContactCardGrid';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      name: "",
      heroImage: "",
      people: [],
      contentBlocks: [],
      image: ""
     }
  }
     client = contentful.createClient({
      space: process.env.REACT_APP_API_SPACE, accessToken: process.env.REACT_APP_API_KEY

      })
    componentDidMount() {

        this.fetchPosts().then(this.setPosts);
      }
      fetchPosts = () => this.client.getEntries(
        {
            'content_type': 'site',
            'fields.slug': this.props.location.pathname.slice(1),

          }
      )
      setPosts = response => {
        this.setState({
          posts: response.items,
        })
        if (this.state.posts) 
        this.state.posts.map(({fields}, i) =>
          this.setState({
          name: fields.name, 
          heroImage: fields.hero.fields.heroImage.fields.file.url,
          heroHeader: fields.hero.fields.heroHeader,
          heroBody: fields.hero.fields.heroBody,
          heroButtonText: fields.hero.fields.heroButtonText,
          contentBlocks: fields.contentBlock,
          people: fields.people
        }))


      }
      
  render() {
    console.log(this.state.people)
     const { heroBody, heroButtonText, heroImage, heroHeader } = this.state
     const contentBlocks = this.state.contentBlocks ? this.state.contentBlocks.map(function(data, idx) {
   
        return ([
          <ContentBlock 
          key={idx} 
          testimonial={data.fields.testimonial} 
          testimonialDescription={data.fields.testimonialDescription}
          testimonialBody={data.fields.testimonialBody} 
          />

       
        ]);
     }) : null
    return (    
      <div>
        <Navigation />
      <Hero 
        heroImage={heroImage}
        heroHeader={heroHeader}
        heroBody={heroBody}
        heroButtonText={heroButtonText}

        />
        {contentBlocks}
        <div className="container">
            <ContactCardGrid data={this.state.people} />
        </div>

      </div>
    )
  }
}
export default Contact;
