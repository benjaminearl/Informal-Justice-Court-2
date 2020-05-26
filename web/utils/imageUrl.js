const imageUrl = require('@sanity/image-url')
const sanityClient = require('./sanityClient')

const builder = imageUrl(sanityClient)

function urlFor(source) {
  return builder.image(source)
}

module.exports = urlFor
