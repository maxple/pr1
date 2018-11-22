import { Route, Switch } from 'react-router-dom'
import Menu from './ui/Menu'
import Whoops404 from './ui/Whoops404'
import { ColorContainer, ColorsContainer, NewColorContainer } from './containers'
import '../stylesheets/APP.scss'

const App = () =>
  <Switch>
    <Route exact
           path="/:id"
           component={ColorContainer} />
    <Route path="/"
           component={() => (
             <div className="app">
               <Route component={Menu} />
               <NewColorContainer />
               <Switch>
                 <Route exact
                        path="/"
                        component={ColorsContainer} />
                 <Route path="/sort/:sort"
                        component={ColorsContainer} />
                 <Route component={Whoops404} />
               </Switch>
             </div>
           )} />
  </Switch>

export default App
