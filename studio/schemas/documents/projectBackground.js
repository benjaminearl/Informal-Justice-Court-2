import {format} from 'date-fns'

export default {
  type: 'document',
  name: 'projectBackground',
  title: 'Project Background',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'position',
      type: 'number',
      title: 'Position',
      description: 'Order of article on homepage. 1 at the top.',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'mainImage',
      title: 'Thumbnail Image',
      type: 'mainImage'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'excerptPortableText'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ],
  orderings: [
    {
      title: 'Position',
      name: 'position',
      by: [
        {field: 'position', direction: 'asc'}
      ]
    },
  ]
}
