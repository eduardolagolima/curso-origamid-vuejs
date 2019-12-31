import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

// import Cursos from './views/Cursos.vue';
// import Curso from './views/Curso.vue';
// import CursoAulas from './views/CursoAulas.vue';
// import CursoDescricao from './views/CursoDescricao.vue';

// Vai criar 4 arquivos
// const Cursos = () => import('./views/Cursos.vue');
// const Curso = () => import('./views/Curso.vue');
// const CursoAulas = () => import('./views/CursoAulas.vue');
// const CursoDescricao = () => import('./views/CursoDescricao.vue');

// Vai criar apenas 1 arquivo
const Cursos = () => import(/* webpackChunkName: "curso" */ './views/Cursos.vue');
const Curso = () => import(/* webpackChunkName: "curso" */ './views/Curso.vue');
const CursoAulas = () => import(/* webpackChunkName: "curso" */ './views/CursoAulas.vue');
const CursoDescricao = () => import(/* webpackChunkName: "curso" */ './views/CursoDescricao.vue');

import Ceps from './views/Ceps.vue';
import CepsDados from './views/CepsDados.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: 'web', // determina onde é a base da aplicação
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        sidebar: Ceps
      }
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/cursos',
      component: Cursos,
      props: true,
      // beforeEnter(to, from, next) {
      //   console.log('to: ', to);
      //   console.log('from: ', from);
      //   next();
      // },
      children: [
        {
          name: 'curso',
          path: ':curso',
          component: Curso,
          props: true,
          children: [
            {
              name: 'aulas',
              path: 'aulas',
              component: CursoAulas
            },
            {
              name: 'descricao',
              path: 'descricao',
              component: CursoDescricao
            }
          ]
        }
      ]
    },
    // substituida pelo children
    // {
    //   path: '/cursos/:curso',
    //   component: Cursos,
    //   props: true
    // }
    {
      path: '/ceps',
      components: {
        default: Ceps,
        sidebar: Home
      },
      children: [
        {
          path: ':cep',
          component: CepsDados,
          props: true
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0,
    }
    // return window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});