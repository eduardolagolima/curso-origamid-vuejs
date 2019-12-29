import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Cursos from './views/Cursos.vue';
import Curso from './views/Curso.vue';
import CursoAulas from './views/CursoAulas.vue';
import CursoDescricao from './views/CursoDescricao.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: 'web', // determina onde é a base da aplicação
  routes: [
    {
      path: '/',
      component: Home
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
  ]
});