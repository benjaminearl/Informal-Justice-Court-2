const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateNewsItem (newsItem) {
  return {
    ...newsItem,
    body: BlocksToMarkdown(newsItem.body, { serializers, ...client.config() })
  }
}

async function getNewsItems () {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "newsItem" && defined(slug) && publishedAt < now()]`
  const projection = groq`{
    _id,
    publishedAt,
    title,
    slug,
    body[]{
      ...,
      children[]{
        ...,
        // Join inline reference
        _type == "teamMemberReference" => {
          // check /studio/documents/teamMembers.js for more fields
          "name": @.teamMember->name,
          "slug": @.teamMember->slug
        }
      }
    },
    "teamMembers": teamMembers[].teamMember->
  }`
  const order = `| order(publishedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const prepareNewsItems = reducedDocs.map(generateNewsItem)
  return prepareNewsItems
}

module.exports = getNewsItems
