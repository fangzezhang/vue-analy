<template>
    <header class="app-header">
        <router-link v-for="item in menu" :to="item.path">{{item.name}}</router-link>
    </header>
</template>
<script>
    export default {
        data() {
            return {
                menu: []
            }
        },
        components: {},
        methods: {

        },
        mounted() {
            this.menu = [
                {path: '/home', name: '首页'},
                {path: '/about', name: '关于'},
                {path: '/information', name: '资讯'},
            ]
        }
    }
</script>
<style lang="scss" scoped>
    .app-header {
        display: flex;
        justify-content: space-between;
        >a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1/3 * 100%;
            height: 4rem;
            background: yellow;
            font-weight: bold;
            text-decoration: none;
            &:hover {
                background: gray;
                transition: .3s;
            }
        }
    }
</style>
