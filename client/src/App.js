import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Hotels from './pages/hotels/Hotels'
import CreateHotel from './pages/createHotel/CreateHotel'
import HotelDetails from './pages/hotelDetails/HotelDetails'
import PageNotFound from './pages/pageNotFound/PageNotFound'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Hotels />
          </Route>
          <Route exact path="/create">
            <CreateHotel />
          </Route>
          <Route exact path="/hotels/:id">
            <HotelDetails />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
