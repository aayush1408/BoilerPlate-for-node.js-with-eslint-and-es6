import express from 'express'

import config from './config'

const app = express()

app.listen(config.app.port, () => {
  console.log(`Server running at ${config.app.port}`)
})
