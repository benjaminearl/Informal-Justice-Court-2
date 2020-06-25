import {format} from 'date-fns'

export default {
  type: 'document',
  name: 'justiceInspiration',
  title: 'Justice Inspiration',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of page. This will appear on the homepage with an image'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      description: 'Subtitle of the page. This will appear on the page of the content itself.'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'The slug creates the URL of the page.',
      validation: Rule => Rule.error('You need to generate a slug for the page to appear.').required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'mainImage',
      title: 'Thumbnail Image',
      type: 'mainImage',
      description: 'This image will act as the thumbnail image and cover image for the content page'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
      description: 'The excerpt will be featured on the carousel if this content is chosen to appear. One sentance max.'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body',
      description: 'This is the main content of the page you are adding. Images and text can be added.'
    }
  ]
}
