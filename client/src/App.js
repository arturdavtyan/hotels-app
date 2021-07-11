import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Hotels from './pages/hotels/Hotels'
import CreateHotel from './pages/createHotel/CreateHotel'
import HotelDetails from './pages/hotelDetails/HotelDetails'
import PageNotFound from './pages/pageNotFound/PageNotFound'

// import { getAllHotels, getHotelById, createHotel } from './api/hotels'
import { createFeedback } from './api/feedback'

function App() {
  // const location = useLocation()
  // console.log(location)

  const createFeedbackHendler = async () => {
    await createFeedback({
      hotel_id: 3,
      rate: 4,
      comment: 'Instagram tools are free and useful social media tools where we get information from Instagram and provide this to you in different ways.'
    })
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const a = await createHotel({ name: 'asd' })
  //     console.log(a)
  //   }
  //   fetchData()
  // }, [])

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
