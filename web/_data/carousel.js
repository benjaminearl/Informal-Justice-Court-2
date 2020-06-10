const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateCarousel (carousel) {
  return {
    ...carousel
  }
}

async function getCarousel () {
  const filter = groq`*[_type == "carousel"]`
  const projection = groq`{
    carouselItemOne->{title},
    carouselItemTwo->{title},
    carouselItemThree->{title}
  }`
  const query = [filter, projection].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const prepareCarousel = reducedDocs.map(generateCarousel)
  return prepareCarousel
}

module.exports = getCarousel
