export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'When you have finished uploading content to the site then press the deploy button. Please add all the content before pressing the deploy button because the service hosting the site tracks how many times you have deployed and will start charging if it exceeds a certain amount per month.',
              sites: [
                {
                  buildHookId: '600a840b4f4dcdab351ede40',
                  title: 'Website',
                  name: 'informaljusticecourt-2',
                  apiId: '7edb0717-c3e0-472c-873f-94f5bcdcce38'
                }
              ]
            }
          }
        ],
        data: [
          {title: 'Frontend', value: 'https://informaljusticecourt-2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
  ]
}
