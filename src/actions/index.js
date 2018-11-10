import * as contentful from 'contentful'
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECT = 'FETCH_PROJECT';
export const SEND_SLUG = 'SEND_SLUG';

const client = contentful.createClient({
  space: process.env.REACT_APP_API_SPACE, accessToken: process.env.REACT_APP_API_KEY

})

export function fetchProjects() {
  const request = client.getEntries(
    {
        'content_type': 'project', 
      }
  )
  return {
    type: FETCH_PROJECTS,
    payload: request
  };
}


export function fetchProject(slug) {
  const project = client.getEntries(
    {
      'content_type' : 'project',
      'fields.slug': slug,
    }
  )
  return {
    type: FETCH_PROJECT,
    payload: project
  }

}
