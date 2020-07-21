const groq = require('groq')
const client = require('../utils/sanityClient')
module.exports = async function() {
  return await client.fetch(groq`
    *[_id == "carousel"]{
      carouselItemOne->,
      "carouselOneImage": carouselItemOne->mainImage.asset->url,
      carouselItemTwo->,
      "carouselTwoImage": carouselItemTwo->mainImage.asset->url,
      carouselItemThree->,
      "carouselThreeImage": carouselItemThree->mainImage.asset->url,
      carouselItemFour->,
      "carouselFourImage": carouselItemFour->mainImage.asset->url,
      carouselItemFive->,
      "carouselFiveImage": carouselItemFive->mainImage.asset->url
    }[0]
  `)
}
