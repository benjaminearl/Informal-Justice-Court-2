const groq = require('groq')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')

const hasToken = !!client.config().token

function generateTeamMember (teamMember) {
  return {
    ...teamMember,
    bio: BlocksToMarkdown(teamMember.bio, { serializers, ...client.config() })
  }
}

async function getTeamMembers () {
  const filter = groq`*[_type == "teamMember"]`
  const docs = await client.fetch(filter).catch(err => console.error(err))
  const teamMembers = docs.map(generateTeamMember)
  const reducedTeamMembers = overlayDrafts(hasToken, teamMembers)
  return reducedTeamMembers
}

module.exports = getTeamMembers
