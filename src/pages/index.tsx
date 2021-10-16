import type { NextPage } from 'next'
import Page from '../components/Page'
import AppContext from '../data/AppContext'

const Home: NextPage = () => {
  return (
    <AppContext>
   <Page />
    </AppContext>
  )
}

export default Home
