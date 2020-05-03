export default {
  name: 'teamInformation',
  type: 'document',
  title: 'Team Information',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'methodology',
      type: 'text',
      title: 'Methodology'
    },
    {
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'teamMember'
          }
        }
      ]
    },
    {
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'partner'
          }
        }
      ]
  }
  ]
}
