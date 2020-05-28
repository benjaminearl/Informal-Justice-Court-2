const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateAboutUs (aboutUs) {
  return {
    ...aboutUs,
    body: BlocksToMarkdown(aboutUs.body, { serializers, ...client.config() })
  }
}

async function getAboutUs () {
  const filter = groq`*[_type == "aboutUs" && defined(slug)]`
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
  const prepareAboutUs = reducedDocs.map(generateAboutUs)
  return prepareAboutUs
}

module.exports = getAboutUs
