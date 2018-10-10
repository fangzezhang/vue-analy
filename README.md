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
    process.env: process是nodejs的一个全局变量，process.env返回一个包含用户环境信息的对象；
    if判断，当生产环境时，使用另一套配置方案；
    简单配置没什么好说的。

2.路由<br>
-----
    路由配置在routerConfig.js里面，要使用路由，首先需要安装路由插件Vue.use(VueRouter)，然后在跟组件(main.js)里注册；
    切记routes数组里面对象的参数是component，没有“s”，若是加了“s”会报错；
    <router-link>点击导航，通过to属性指定目标地址，当然Vue实例内部也可以通过this.$router.push(...)进行导航；
    <router-view>渲染路径匹配到的视图组件；
    嵌套路由写法类似，直接套就行了，这里就不多说了。

3.Vuex<br>
-----
    还是需要先Vue.use(Vuex)，然后在跟组件里注册，这样子组件就可以通过this.$store访问到；
    一个简单的状态存储功能，由于action可以异步操作，这里通过setTimeout模拟异步，使用了Promise来组合多个action，
    所以点击1s后+101执行的操作是先执行+1操作，完成后再执行+100操作。





