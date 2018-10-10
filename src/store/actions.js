import * as types from './type'

export default {
    add({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit(types.ADD);
                resolve()
            },1000)
        })
    },
    add100({ commit }, obj) {
        commit(types.ADD100, obj)
    }
}
