export const state = {
  user: {
    loggedIn: false,
    data: null,
  },
}

export const getters = {
  user(state) {
    return state.user
  },
}

export const mutations = {
  SET_LOGIN(state, value) {
    state.user.loggedIn = value
  },
  SET_USER(state, data) {
    state.user.data = data
  },
}

export const actions = {
  fetchUser({ commit }, user) {
    commit('SET_LOGIN', user !== null)
    if (user)
      commit('SET_USER', { displayName: user.displayName, email: user.email })
    else commit('SET_USER', null)
  },
}
