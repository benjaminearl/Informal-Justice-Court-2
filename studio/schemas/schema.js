import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import teamMember from './documents/teamMember'
import siteSettings from './documents/siteSettings'
import partner from './documents/partner'
import pretrialProblem from './documents/pretrialProblem'
import informalJusticeCourt from './documents/informalJusticeCourt'
import partnersInJustice from './documents/partnersInJustice'
import aboutAardschap from './documents/aboutAardschap'
import behindTheScenes from './documents/behindTheScenes'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'

export default createSchema({

  name: 'Informal Justice Court',

  types: schemaTypes.concat([
    siteSettings,
    teamMember,
    mainImage,
    bodyPortableText,
    partner,
    pretrialProblem,
    informalJusticeCourt,
    partnersInJustice,
    aboutAardschap,
    behindTheScenes,
    bioPortableText,
    excerptPortableText

  ])
})
