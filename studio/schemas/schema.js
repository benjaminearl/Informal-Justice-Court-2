// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import teamMember from './documents/teamMember'
import category from './documents/category'
import newsItem from './documents/newsItem'
import siteSettings from './documents/siteSettings'
import homePage from './documents/homePage'
import partner from './documents/partner'
import projectInformation from './documents/projectInformation'
import teamInformation from './documents/teamInformation'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import teamMemberReference from './objects/teamMemberReference'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'Informal Justice Court',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    newsItem,
    category,
    teamMember,
    mainImage,
    teamMemberReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    homePage,
    partner,
    projectInformation,
    teamInformation

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
