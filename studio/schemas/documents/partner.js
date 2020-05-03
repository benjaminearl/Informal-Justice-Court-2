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
      description: 'Some frontends will require a slug to be set to be able to show the person',
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
