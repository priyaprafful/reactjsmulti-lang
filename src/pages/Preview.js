import { useEffect } from 'react'
import qs from 'qs'
import { client,linkResolver } from '../prismic-config';



const Preview = ({ history, location }) => {
  useEffect(() => {
    const params = qs.parse(location.search.slice(1))
    if (!params.token) {
      return console.warn(`No token available, check your configuration`)
    }

    client.previewSession(params.token, linkResolver, '/')
      .then(url => history.push(url))
  })
  return null
}

export default Preview