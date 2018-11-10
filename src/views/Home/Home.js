import React, { Component } from 'react';
import * as contentful from 'contentful'

import Hero from '../../components/hero/Hero'
import Navigation from '../../components/navigation/Navigation';
import ContentBlock from '../../components/content-block/ContentBlock';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      name: "",
      heroImage: "",
      contentBlocks: [],
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
            'fields.slug': this.props.location.pathname.slice(1),
            'content_type': 'site'
          }
      )
      setPosts = response => {
        this.setState({
          posts: response.items,
        })
        if (this.state.posts) 
        console.log(this.state.contentBlocks)
        this.state.posts.map(({fields}, i) =>
          this.setState({
          name: fields.name, 
          heroImage: fields.hero.fields.heroImage.fields.file.url,
          heroHeader: fields.hero.fields.heroHeader,
          heroBody: fields.hero.fields.heroBody,
          heroButtonText: fields.hero.fields.heroButtonText,
          contentBlocks: fields.contentBlock
        }))
        console.log(response)
        console.log(this.state.contentBlocks)

      }
      
  
    
  render() {
      const contentBlocks = this.state.contentBlocks ? this.state.contentBlocks.map(function(data, idx) {
        return ([
          <ContentBlock 
          key={idx} 
          testimonial={data.fields.testimonial} 
          testimonialDescription={data.fields.testimonialDescription}
          testimonialBody={data.fields.testimonialBody} 
          // image={data.fields.image.fields.file.url} 
          />

       
        ]);
     }) : null
     const { heroBody, heroButtonText, heroImage, heroHeader } = this.state

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

      </div>
    )
  }
}
export default Home;
