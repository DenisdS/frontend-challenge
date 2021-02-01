import React from 'react'

import { SubHeader } from 'components'

import styles from '../Home/Home.module.css'

class Busca extends React.Component {
  state = {}

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Busca' }]}
          heading="Aqui você encontra todas as tribos"
        />
        <div className={styles.wrapper}>
          <h1>Buscar artista</h1>
        </div>
      </React.Fragment>
    )
  }
}

export default Busca
