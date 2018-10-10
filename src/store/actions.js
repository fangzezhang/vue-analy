export default {
    add({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('add');
                resolve()
            },1000)
        })
    },
    add100({ commit }, obj) {
        commit('add100', obj)
    }
}
