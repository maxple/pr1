import { Route, Switch } from 'react-router-dom'
import { Color, Colors, Menu, NewColor } from './containers'
import '../stylesheets/APP.scss'

const App = () =>
  <Switch>
    <Route exact
           path="/:id"
           component={Color} />
    <Route path="/"
           component={() => (
             <div className="app">
               <Menu />
               <NewColor />
               <Colors />
             </div>
           )} />
  </Switch>

export default App