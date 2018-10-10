<template>
    <div class="app-about">
        关于的内容，巴拉巴拉巴拉巴拉巴拉巴拉...
        <div>{{count}}</div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        components: {

        },
        computed: {
            count() {
                return this.$store.state.count;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .app-about {
        text-align: center;
    }
</style>
