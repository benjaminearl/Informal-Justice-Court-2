export default {
  type: 'document',
  name: 'teamMember',
  title: 'Team Member',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage'
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Biography'
    }
  ]
}
