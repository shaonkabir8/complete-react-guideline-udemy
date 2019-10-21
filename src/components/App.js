import React from 'react';
import Layout from './layout/Layout';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder'

class App extends React.Component {
  render() {
    return(
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    )
  }
}

export default App;
