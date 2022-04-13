import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fc1f5a52 = () => interopDefault(import('../pages/crear.vue' /* webpackChunkName: "pages/crear" */))
const _c36dc7a2 = () => interopDefault(import('../pages/listar.vue' /* webpackChunkName: "pages/listar" */))
const _e90bac1a = () => interopDefault(import('../pages/ver.vue' /* webpackChunkName: "pages/ver" */))
const _2e47eda2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/crear",
    component: _fc1f5a52,
    name: "crear"
  }, {
    path: "/listar",
    component: _c36dc7a2,
    name: "listar"
  }, {
    path: "/ver",
    component: _ee6be74c,
    name: "ver"
  }, {
    path: "/",
    component: _2e47eda2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
