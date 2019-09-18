// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'

import index from './index'

Vue.use(index)

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
