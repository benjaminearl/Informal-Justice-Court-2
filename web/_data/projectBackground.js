const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token
const urlFor = require('../utils/imageUrl')

function generateProjectBackground (projectBackground) {
  return {
    ...projectBackground,
    body: BlocksToMarkdown(projectBackground.body, { serializers, ...client.config() })
  }
}

async function getProjectBackground () {
  const filter = groq`*[_type == "projectBackground" && defined(slug)]`
  const projection = groq`{
    _id,
    title,
    slug,
    "imageUrl": mainImage.asset->url,
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
  const prepareProjectBackground = reducedDocs.map(generateProjectBackground)
  return prepareProjectBackground
}

module.exports = getProjectBackground
