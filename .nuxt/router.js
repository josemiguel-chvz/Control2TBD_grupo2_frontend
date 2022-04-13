import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6ad1377e = () => interopDefault(import('..\\pages\\crear.vue' /* webpackChunkName: "pages/crear" */))
const _5cf66730 = () => interopDefault(import('..\\pages\\listar.vue' /* webpackChunkName: "pages/listar" */))
const _ee6be74c = () => interopDefault(import('..\\pages\\ver.vue' /* webpackChunkName: "pages/ver" */))
const _1728d249 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6ad1377e,
    name: "crear"
  }, {
    path: "/listar",
    component: _5cf66730,
    name: "listar"
  }, {
    path: "/ver",
    component: _ee6be74c,
    name: "ver"
  }, {
    path: "/",
    component: _1728d249,
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
