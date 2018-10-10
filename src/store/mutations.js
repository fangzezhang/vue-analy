import * as types from './type'

export default {
    [types.ADD](state) {
        state.count++
    },
    [types.ADD100](state, obj) {
        state.count += obj.amount
    }
}
