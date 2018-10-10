<template>
    <div class="app-home">
        首页的内容，巴拉巴拉巴拉巴拉巴拉巴拉...
        <div>{{count}}</div>
        <div>通过getter过滤后的数据：{{doneTodos[0]}}</div>
        <button @click="addClickFn">1s后+101</button>
        <button @click="add10ClickFn">+100</button>
    </div>
</template>
<script>
    import { mapState, mapGetters } from 'vuex'
    export default {
        data() {
            return {
                payload: {
                    amount: 100
                }
            }
        },
        components: {},
        computed: {
            ...mapState(['count']),
            ...mapGetters(['doneTodos']),
        },
        methods: {
            addClickFn() {
                this.$store.dispatch('add')
                    .then(() => {
                        this.$store.dispatch('add100', this.payload)
                    })
            },
            add10ClickFn() {
                this.$store.dispatch('add100', this.payload)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .app-home {
        text-align: center;
    }
</style>
