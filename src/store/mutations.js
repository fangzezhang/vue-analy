export default {
    add(state) {
        state.count++
    },
    add100(state, obj) {
        state.count += obj.amount
    }
}
