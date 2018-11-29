import express from 'express'
import path from 'path'
import initialState from '../../data/initialState.json'
import storeFactory from '../store'
import fs from 'fs'
import { Provider } from 'react-redux'
import { compose } from 'redux'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import App from '../components/App'

const staticCSS = fs.readFileSync(path.join(__dirname, '../../dist/assets/bundle.css'))

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

const addStoreToRequestPipeline = (req, res, next) => {
  req.store = serverStore
  next()
}

const respond = (req, res) => res.status(200).send(htmlResponse(req.url))

const makeClientStoreFrom = store => url =>
  ({
    url,
    store: storeFactory(false, store.getState()),
  })

const renderComponentsToHTML = ({ url, store }) =>
  ({
    state: store.getState(),
    html: renderToString(
      <Provider store={store}>
        <StaticRouter location={url}
                      context={{}}>
          <App />
        </StaticRouter>
      </Provider>,
    ),
  })

const buildHTMLPage = ({ html, state }) => `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Universal Color Organizer</title>
        <style>${staticCSS}</style>
    </head>
    <body>
        <div id="root">${html}</div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(state)}
        </script>
        <script src="/bundle.js"></script>
    </body>
</html>`

const htmlResponse = compose(
  buildHTMLPage,
  renderComponentsToHTML,
  makeClientStoreFrom(serverStore),
)

export default express()
  .use(logger)
  .use(fileAssets)
  .use(addStoreToRequestPipeline)
  .use(respond)
