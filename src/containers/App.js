import React from 'react'
import { connect } from 'react-redux'
import { Container, Header } from 'semantic-ui-react'
import DeployProcess from '../components/DeployProcess'
import {Link} from 'react-router-dom'

const App = ({actions, children}) => (
  <div>
    <Container text>
      <Header as='h2'>Land Allotment Application</Header>
      <p>Click below to proceed the application procedure</p>
      <Link to="/startProcess/key/FirmDetailsProcess"><button className='btn btn-primary'>Show Process</button></Link>
    </Container>
  </div>
)

const mapStateToProps = state => ({
})

export default connect(
  mapStateToProps,
)(App)
