import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'

const hiddenDocTypes = listItem =>
  !['teamMember', 'siteSettings', 'partner', 'post', 'carousel', 'aboutAardschap', 'partnersInJustice', 'informalJusticeCourt', 'pretrialProblem', 'behindTheScenes'].includes(listItem.getId())

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
          .title('Content')
          .child(
            S.list()
              .title('Content')
              .items([
                S.listItem()
                  .title('Informal Justice Court')
                  .schemaType('informalJusticeCourt')
                  .child(S.documentTypeList('informalJusticeCourt').title('Informal Justice Court')),
                S.listItem()
                  .title('Pre-trial Problem')
                  .schemaType('pretrialProblem')
                  .child(S.documentTypeList('pretrialProblem').title('Pre-trial Problem')),
                S.listItem()
                  .title('Partners in Justice')
                  .schemaType('partnersInJustice')
                  .child(S.documentTypeList('partnersInJustice').title('Partners in Justice')),
                S.listItem()
                  .title('Behind the scenes')
                  .schemaType('behindTheScenes')
                  .child(S.documentTypeList('behindTheScenes').title('Behind the scenes')),
                S.listItem()
                  .title('About Aardschap')
                  .schemaType('aboutAardschap')
                  .child(S.documentTypeList('aboutAardschap').title('About Aardschap')),
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
