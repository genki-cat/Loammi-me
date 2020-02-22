import Vue from 'vue'
import Router from 'vue-router'
import _home from '@/components/homepage/home'
import _navigation from '@/components/homepage/navigation'
import _about from '@/components/homepage/about'
import _experience from '@/components/homepage/experience'
import _skill from '@/components/homepage/skill'
import _services from '@/components/homepage/services'
import _portfolio from '@/components/homepage/portfolio'
import _footer from '@/components/homepage/footer'
import casepage from '@/components/casepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {_home,_navigation,_about,_experience,_skill,_services,_portfolio,_footer},
      meta:{isHomePage:true}
    },
    {
        path:'/about',
        redirect:'/'
    },
    {
        path:'/experience',
        redirect:'/'
    },
    {
        path:'/skills',
        redirect:'/'
    },
    {
        path:'/services',
        redirect:'/'
    },
    {
        path:'/portfolio',
        redirect:'/'
    },
    {
        path:'/contact',
        redirect:'/'
    },
    {
        path:'/casepage',
        name:'casepage',
        component:casepage,
        meta:{isHomePage:false}
    }
  ]
})
