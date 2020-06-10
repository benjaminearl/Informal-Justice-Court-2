const groq = require('groq')
const client = require('../utils/sanityClient.js')

module.exports =  async function() {
  return await client.fetch(groq`
    *[_id == "carousel"]{
      carouselItemOne->,
      carouselItemTwo->,
      carouselItemThree->
    }`
  )
}
