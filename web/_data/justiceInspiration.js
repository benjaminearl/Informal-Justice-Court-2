const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateJusticeInspiration (justiceInspiration) {
  return {
    ...justiceInspiration,
    body: BlocksToMarkdown(justiceInspiration.body, { serializers, ...client.config() }),
    excerpt: BlocksToMarkdown(justiceInspiration.excerpt, { serializers, ...client.config() })
  }
}

async function getJusticeInspiration () {
  const filter = groq`*[_type == "justiceInspiration" && defined(slug)]`
  const projection = groq`{
    _id,
    title,
    slug,
    excerpt[]{
      ...,
      children[]{
        ...,
      }
    },
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
  const prepareJusticeInspiration = reducedDocs.map(generateJusticeInspiration)
  return prepareJusticeInspiration
}

module.exports = getJusticeInspiration
