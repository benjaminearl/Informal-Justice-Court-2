import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import teamMember from './documents/teamMember'
import siteSettings from './documents/siteSettings'
import partner from './documents/partner'
import projectBackground from './documents/projectBackground'
import pretrialProblem from './documents/pretrialProblem'
import justiceInspiration from './documents/justiceInspiration'
import aboutUs from './documents/aboutUs'
import article from './documents/article'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import mainImage from './objects/mainImage'

export default createSchema({

  name: 'Informal Justice Court',

  types: schemaTypes.concat([
    siteSettings,
    teamMember,
    mainImage,
    bodyPortableText,
    partner,
    projectBackground,
    pretrialProblem,
    justiceInspiration,
    aboutUs,
    article,

  ])
})
