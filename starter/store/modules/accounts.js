
const state = {
  list: []
}

const mutations = {
  sync (state) {
    if (state.list.length === 0 && typeof localStorage !== 'undefined') {
      try {
        state.list = JSON.parse(localStorage.getItem('accounts')) || []
      } catch (error) {
        console.error('parse: localStorage: accounts: fail:', error)
      }
    }
  },
  add (state, obj) {
    const index = state.list.findIndex(a => (a.provider === obj.provider && a.id === obj.id))
    if (index > -1) {
      console.log('update account:', obj.name)
      state.list[index] = obj
    } else {
      console.log('add new account:', obj.name)
      state.list.push(obj)
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('accounts', JSON.stringify(state.list))
    }
  },
  remove (state, map) {
    if (typeof window !== 'undefined') {
      window.map = map
    }
    const index = state.list.findIndex(a => (a.provider === map.getNamedItem('provider').value && a.id === map.getNamedItem('id').value))
    if (index > -1) {
      console.log('remove account:', map.getNamedItem('name').value)
      state.list.splice(index, 1)
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('accounts', JSON.stringify(state.list))
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
