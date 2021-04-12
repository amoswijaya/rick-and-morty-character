import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './views/Home'
import DetailPorduct from './views/Detail'
import Favorite from './views/Favorite'
function App() {  
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route path='/character/:id'>
          <DetailPorduct></DetailPorduct>
        </Route>
        <Route path='/character'>
          <Favorite></Favorite>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  )
}


export default App