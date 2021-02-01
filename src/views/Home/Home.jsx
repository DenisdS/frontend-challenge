import React from 'react'

import { Link } from 'react-router-dom'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.css'
class Home extends React.Component {

  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos front-end Challenge"
        />
        <div className={styles.wrapper}>
          <h1>Escute seu artista preferido!</h1>
          <Link to="/busca">Buscar Artista</Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
