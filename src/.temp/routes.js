const c1 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/home/ry/Projects/vueportfolio/src/templates/BlogPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--blogs-vue" */ "/home/ry/Projects/vueportfolio/src/pages/Blogs.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/home/ry/Projects/vueportfolio/src/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/ry/Projects/vueportfolio/src/pages/Index.vue")

export default [
  {
    path: "/blog/:title/",
    component: c1
  },
  {
    path: "/blogs/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
