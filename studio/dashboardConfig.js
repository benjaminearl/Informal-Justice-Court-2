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
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
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
    {
      name: 'document-list',
      options: {title: 'Recent news', order: '_createdAt desc', types: ['newsItem']},
      layout: {width: 'medium'}
    }
  ]
}
