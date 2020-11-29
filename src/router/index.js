import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Inicio.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "LineUp" */ "../components/Login.vue"),
  },
  {
    path: "/",
    name: "Inicio",
    alias: ["/inicio", "/home", "/portada", "/concierto"],
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
    path: "/tickets/:id",
    name: "Carrito",
    props: true,
    component: () =>
      import(/* webpackChunkName: "carrito" */ "../views/Carrito.vue"),
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
  },
  {
    path: "/contactus",
    name: "Contact Us",
    component: () =>
      import(/* webpackChunkName: "contact us" */ "../views/Contactus.vue"),
  },
  {
    path: "/editar/:id",
    name: "Editar",
    component: () =>
      import(/* webpackChunkName: "Editar" */ "../views/Editar.vue"),
  },
  {
    path: "/agregar",
    name: "Agregar",
    component: () =>
      import(/* webpackChunkName: "Agregar" */ "../views/Agregar.vue"),
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import(/* webpackChunkName: "Chat" */ "../views/Chat.vue"),
    meta: {
      autentificado: true,
    },
  },
  {
    path: "/faqs",
    name: "Faqs",
    component: () => import(/* webpackChunkName: "faqs" */ "../views/Faqs.vue"),
  },
  {
    path: "*",
    name: "Not_Found",
    component: () =>
      import(/* webpackChunkName: "error 404" */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let usuario = firebase.auth().currentUser;
  console.log(usuario);
  let autorizacion = to.matched.some((record) => record.meta.autentificado);

  if (autorizacion && !usuario) {
    next("login");
  } else if (!autorizacion && usuario) {
    next();
  } else {
    next();
  }
});

export default router;
