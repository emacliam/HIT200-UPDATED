const router = require('express').Router()
const algoliaSearch = require('algoliasearch')

const client = algoliaSearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_SECRET
)
// algoliasearch-> search data in your algolia database
// mongoose-algolia -> Sync documents to the algolia database

const index = client.initIndex(process.env.ALGOLIA_INDEX)

router.post('/search', async (req, res) => {
  try {
    const result = await index.search(req.body.title)
    res.json(result.hits)
  } catch (err) {
    res.json(err.message)
  }
})

module.exports = router
