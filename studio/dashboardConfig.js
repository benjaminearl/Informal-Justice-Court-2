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
                  buildHookId: '5eae88fb0ecc6b4860d0b205',
                  title: 'Website',
                  name: 'Informal-Justice-Court-2',
                  apiId: 'd81c4e4f-e457-45a1-b0d6-a7e4eea6a214'
                }
              ]
            }
          }
        ],
        data: [
          {title: 'Frontend', value: 'https://Informal-Justice-Court-2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
  ]
}
