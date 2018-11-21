import { Route, Switch } from 'react-router-dom'
import { ColorContainer, ColorsContainer, MenuContainer, NewColorContainer } from './containers'
import '../stylesheets/APP.scss'

const App = () =>
  <Switch>
    <Route exact
           path="/:id"
           component={ColorContainer} />
    <Route path="/"
           component={() => (
             <div className="app">
               <MenuContainer />
               <NewColorContainer />
               <ColorsContainer />
             </div>
           )} />
  </Switch>

export default App