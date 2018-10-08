# vue-analy
vue-cli造轮子
webpack配置、路由设置、vuex设置。。。<br>

项目结构：<br>
-----
    src
        assets
           ...
        components
            ...
        static
            ...
        App.vue
        main.js
        routerConfig.js
    index.html
    package.json
    webpack.config.js
    简单解释下：
        App.vue是入口文件，里面有<router-view/>还有些其他组件；
        main.js里面，创建一个Vue对象，引入App组件(render: h => h(App) 也可以写成 components: { App })，
    引入路由配置文件routerConfig.js；
        routerConfig.js里面通过Vue.use(VueRouter)来安装路由插件，并对路由进行配置。
        主要就是这三个文件，相当于枝干，其余组件进行补充。
        
1.简单的webpack 配置<br>
-----
    entry: 入口文件；
    output: 出口文件；
    __dirname: nodejs系统级别的变量，表示当前目录；
    process.env: process是nodejs的一个全局变量，process.env返回一个包含用户环境信息的对象。
    ...没什么好说的，都是些简单配置；if判断，当生产环境时，使用另一套配置方案。

2.路由<br>
-----
    路由配置在routerConfig.js里面；
    <router-link>点击导航，通过to属性指定目标地址，当然Vue实例内部也可以通过this.$router.push(...)进行导航；
    <router-view>渲染路径匹配到的视图组件；








