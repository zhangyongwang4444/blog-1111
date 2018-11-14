import auth from '@/api/auth'
const state = {
    user: null,
    isLogin: false
}
const getters = {

}
const mutations = {
    setUser(state, payload) {
        state.user = payload.user
    },
    setLogin(state, payload) {
        state.isLogin = payload.isLogin
    }
}
const actions = {
    login({ commit }, { username, password }) {
        return auth.login({ username, password })
            .then(res => {
                commit('setUser', { user: res.data })
                commit('setLogin', { isLogin: true })
            })
    },
    register() {

    }
}
export default {
    state,
    getters,
    mutations,
    actions
}