export default {
  name: 'partner',
  type: 'document',
  title: 'Partner',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      type: 'image',
      title: 'Logo or Image'
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Biography'
    }
  ]
}
