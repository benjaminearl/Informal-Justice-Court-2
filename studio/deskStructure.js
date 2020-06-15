import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'

const hiddenDocTypes = listItem =>
  !['teamMember', 'siteSettings', 'partner', 'post', 'carousel', 'aboutUs', 'justiceInspiration', 'pretrialProblem', 'projectBackground', 'article'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
        S.listItem()
          .title('Homepage Carousel')
          .child(
            S.editor()
                .id('carousel')
                .schemaType('carousel')
                .documentId('carousel')
        ),
        S.listItem()
          .title('Content')
          .child(
            S.list()
              .title('Content')
              .items([
                S.listItem()
                  .title('Pretrial Problem')
                  .schemaType('pretrialProblem')
                  .child(S.documentTypeList('pretrialProblem').title('Pretrial Problem')),
                S.listItem()
                  .title('Project Background')
                  .schemaType('projectBackground')
                  .child(S.documentTypeList('projectBackground').title('Project Background')),
                S.listItem()
                  .title('Justice Inspiration')
                  .schemaType('justiceInspiration')
                  .child(S.documentTypeList('justiceInspiration').title('Justice Inspiration')),
                S.listItem()
                  .title('Results')
                  .schemaType('article')
                  .child(S.documentTypeList('article').title('Article')),
                S.listItem()
                  .title('About Us')
                  .schemaType('aboutUs')
                  .child(S.documentTypeList('aboutUs').title('About Us')),
              ])
          ),

      // S.listItem()
      //   .title('Organisation')
      //   .child(
      //     S.list()
      //       .title('Organisation')
      //       .items([
      //         S.divider(),
      //         S.listItem()
      //           .title('Team Members')
      //           .schemaType('teamMember')
      //           .child(S.documentTypeList('teamMember').title('Team Members')),
      //         S.listItem()
      //           .title('Partners')
      //           .schemaType('partner')
      //           .child(S.documentTypeList('partner').title('Partners'))
      //       ])
      //   ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
