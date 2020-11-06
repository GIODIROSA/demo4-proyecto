import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Inicio.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "*",
  //   redirect: "/login",
  // },
  // {
  //   path: "/",
  //   redirect: "/login",
  // },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "LineUp" */ "../components/Login.vue"),
  },
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/lineup",
    name: "LineUp",
    component: () =>
      import(/* webpackChunkName: "LineUp" */ "../views/Lineup.vue"),
    meta: {
      autentificado: true,
    },
  },
  {
    path: "/tickets",
    name: "Tickets",
    component: () =>
      import(/* webpackChunkName: "tickets" */ "../views/Tickets.vue"),
  },
  {
    path: "/travel",
    name: "Travel",
    component: () =>
      import(/* webpackChunkName: "travel" */ "../views/Travel.vue"),
  },
  {
    path: "/beneficios",
    name: "Beneficios",
    component: () =>
      import(/* webpackChunkName: "beneficios" */ "../views/Beneficios.vue"),
  },
  {
    path: "/auf2019",
    name: "Auf2019",
    component: () =>
      import(/* webpackChunkName: "auf 2019" */ "../views/Auf2019.vue"),
    meta: {
      autentificado: true,
    },
  },
  {
    path: "/contactus",
    name: "Contact Us",
    component: () =>
      import(/* webpackChunkName: "contact us" */ "../views/Contactus.vue"),
    children: [
      {
        path: "formulario",
        name: "Formulario",
        component: () =>
          import(
            /* webpackChunkName: "formulario" */ "../components/contacto/Formulario.vue"
          ),
      },
    ],
  },
  {
    path: "/faqs",
    name: "Faqs",
    component: () => import(/* webpackChunkName: "faqs" */ "../views/Faqs.vue"),
  },
  {
    path: "/prueba",
    name: "Prueba",
    component: () =>
      import(/* webpackChunkName: "Prueba" */ "../components/Prueba.vue"),
  },
  {
    path: "/prueba2",
    name: "Prueba2",
    component: () =>
      import(/* webpackChunkName: "Prueba2" */ "../components/Prueba2.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let usuario = firebase.auth().currentUser;
  // console.log(usuario);
  let autorizacion = to.matched.some((record) => record.meta.autentificado);

  if (autorizacion && !usuario) {
    next("login");
  } else if (!autorizacion && usuario) {
    next("inicio");
  } else {
    next();
  }
});

export default router;
