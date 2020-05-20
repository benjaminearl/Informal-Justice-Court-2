import {format} from 'date-fns'

export default {
  type: 'document',
  name: 'pretrialProblem',
  title: 'Pretrial Problem',
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
  ]
}
