export default {
  type: 'document',
  name: 'category',
  title: 'Category',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Content Type',
      name: 'contentType',
      type: 'string',
      options: {
        list: [
          {title: 'Project Background', value: 'projectBackground'},
          {title: 'Pretrail Problem', value: 'pretrialProblem'},
          {title: 'Project Inspiration', value: 'projectInspiration'},
          {title: 'About Us', value: 'aboutUs'}
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
  }
}
  ]
}
