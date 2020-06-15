import Head from 'next/head'
import Nav from '../components/Nav'
import Helmet from '../components/Helmet'

const Index = () => (
  <React.Fragment>
    <Helmet />
    <Nav />
    <h1>Hello from next.js</h1>
  </React.Fragment>
)

export default Index
