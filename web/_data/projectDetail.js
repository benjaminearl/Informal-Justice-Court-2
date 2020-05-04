const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateProjectDetail (projectDetail) {
  return {
    ...projectDetail,
    body: BlocksToMarkdown(projectDetail.body, { serializers, ...client.config() })
  }
}

async function getProjectDetails () {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "projectDetail" && defined(slug) && publishedAt < now()]`
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
  const prepareProjectDetails = reducedDocs.map(generateProjectDetail)
  return prepareProjectDetails
}

module.exports = getProjectDetails
