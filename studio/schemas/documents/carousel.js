export default {
  type: 'document',
  name: 'carousel',
  title: 'Carousel',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'carouselItemOne',
      title: 'Carousel Item One',
      type: 'reference',
      to: [
        {type: 'aboutUs'},
        {type: 'justiceInspiration'},
        {type: 'pretrialProblem'},
        {type: 'projectBackground'},
        {type: 'article'}
      ]
    },
    {
      name: 'carouselItemTwo',
      title: 'Carousel Item Two',
      type: 'reference',
      to: [
        {type: 'aboutUs'},
        {type: 'justiceInspiration'},
        {type: 'pretrialProblem'},
        {type: 'projectBackground'},
        {type: 'article'}
      ]
    },
    {
      name: 'carouselItemThree',
      title: 'Carousel Item Three',
      type: 'reference',
      to: [
        {type: 'aboutUs'},
        {type: 'justiceInspiration'},
        {type: 'pretrialProblem'},
        {type: 'projectBackground'},
        {type: 'article'}
      ]
    },
  ]
}
