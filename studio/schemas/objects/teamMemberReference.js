export default {
  name: 'teamMemberReference',
  type: 'object',
  title: 'Team member reference',
  fields: [
    {
      type: 'reference',
      name: 'teamMember',
      to: [
        {
          type: 'teamMember'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'teamMember.name',
      media: 'teamMember.image.asset'
    }
  }
}
