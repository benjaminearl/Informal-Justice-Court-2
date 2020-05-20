import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'

const hiddenDocTypes = listItem =>
  !['category', 'teamMember', 'siteSettings', 'partner', 'post'].includes(listItem.getId())

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
        .title('Organisation')
        .child(
          S.list()
            .title('Organisation')
            .items([
              S.divider(),
              S.listItem()
                .title('Team Members')
                .schemaType('teamMember')
                .child(S.documentTypeList('teamMember').title('Team Members')),
              S.listItem()
                .title('Partners')
                .schemaType('partner')
                .child(S.documentTypeList('partner').title('Partners'))
            ])
        ),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
