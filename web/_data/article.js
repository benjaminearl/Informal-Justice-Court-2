const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateArticle (article) {
  return {
    ...article,
    body: BlocksToMarkdown(article.body, { serializers, ...client.config() })
  }
}

async function getArticle () {
  const filter = groq`*[_type == "article" && defined(slug)]`
  const projection = groq`{
    _id,
    title,
    slug,
    subtitle,
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
  const prepareArticle = reducedDocs.map(generateArticle)
  return prepareArticle
}

module.exports = getArticle
