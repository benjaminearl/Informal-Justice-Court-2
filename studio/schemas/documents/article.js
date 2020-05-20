import {format} from 'date-fns'

export default {
  type: 'document',
  name: 'article',
  title: 'Article',
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
      title: 'Content Type',
      name: 'contentType',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Article', value: 'article'},
          {title: 'Interview', value: 'interview'},
          {title: 'Exhibitions and Seminars', value: 'exhibitonsSeminars'},
          {title: 'Art and Research', value: 'artResearch'},
          {title: 'Data and Resources', value: 'dataResources'}
        ]
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
