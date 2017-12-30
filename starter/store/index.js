import Vuex from 'vuex'
import accounts from './modules/accounts'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      accounts
    }
  })
}

export default createStore
