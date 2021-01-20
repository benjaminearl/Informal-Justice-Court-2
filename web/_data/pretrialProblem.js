const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generatePretrialProblem (pretrialProblem) {
  return {
    ...pretrialProblem,
    body: BlocksToMarkdown(pretrialProblem.body, { serializers, ...client.config() })
  }
}

async function getPretrialProblem () {
  const filter = groq`*[_type == "pretrialProblem" && defined(slug) && publishedAt < now()]`
  const projection = groq`{
    _id,
    publishedAt,
    title,
    slug,
    subtitle,
    "imageUrl": mainImage.asset->url,
    excerpt,
    body[]{
      ...,
      children[]{
        ...,
      }
    },
  }`
  const order = `| order(publishedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const preparePretrialProblem = reducedDocs.map(generatePretrialProblem)
  return preparePretrialProblem
}

module.exports = getPretrialProblem
