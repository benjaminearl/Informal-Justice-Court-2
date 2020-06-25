const groq = require('groq')
const client = require('../utils/sanityClient')
module.exports =  async function() {
  return await client.fetch(groq`
    *[_id == "carousel"]{
      "carouselOneExcerpt": carouselItemOne->{excerpt},
      "carouselOneImage": carouselItemOne->mainImage.asset->url,
      carouselItemTwo->,
      "carouselTwoImage": carouselItemTwo->mainImage.asset->url,
      carouselItemThree->,
      "carouselThreeImage": carouselItemThree->mainImage.asset->url,
    }[0]
  `)
}
