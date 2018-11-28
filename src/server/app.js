import express from 'express'
import path from 'path'
import initialState from '../../data/initialState.json'
import storeFactory from '../store'
import fs from 'fs'

const serverStore = storeFactory(true, initialState)

serverStore.subscribe(() =>
  fs.writeFile(
    path.join(__dirname, '../../data/initialState.json'),
    JSON.stringify(serverStore.getState()),
    error => error ? console.log('Error saving state!', error) : null,
  ),
)

const logger = (req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`)
  next()
}

const fileAssets = express.static(path.join(__dirname, '../../dist/assets'))

const respond = (req, res) =>
  res.status(200).send(`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Universal Color Organizer</title>
    </head>
    <body>
        <div id="root">ready...</div>
    </body>
</html>`)

const addStoreToRequestPipeline = (req, res, next) => {
  req.store = serverStore
  next()
}

export default express()
  .use(logger)
  .use(fileAssets)
  .use(addStoreToRequestPipeline)
  .use(respond)
