const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateTeamDetail (teamDetail) {
  return {
    ...teamDetail,
    body: BlocksToMarkdown(teamDetail.body, { serializers, ...client.config() })
  }
}

async function getTeamDetails () {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "teamDetail" && defined(slug)]`
  const projection = groq`{
    _id,
    title,
    slug,
    body[]{
      ...,
      children[]{
        ...,
      }
    },
  }`
  const query = [filter, projection].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const prepareTeamDetails = reducedDocs.map(generateTeamDetail)
  return prepareTeamDetails
}

module.exports = getTeamDetails
