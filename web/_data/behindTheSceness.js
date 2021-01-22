const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateBehindTheScenes (behindTheScenes) {
  return {
    ...behindTheScenes,
    body: BlocksToMarkdown(behindTheScenes.body, { serializers, ...client.config() })
  }
}

async function getBehindTheScenes () {
  const filter = groq`*[_type == "behindTheScenes" && defined(slug) && publishedAt < now()]`
  const projection = groq`{
    _id,
    title,
    subtitle,
    slug,
    publishedAt,
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
  const prepareBehindTheScenes = reducedDocs.map(generateBehindTheScenes)
  return prepareBehindTheScenes
}

module.exports = getBehindTheScenes
