const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/skills', component: Skills },
  { path: '/contacts', component: Contacts },


  { path: '*', component: Page404 }
]

const router = new VueRouter({
  routes
})