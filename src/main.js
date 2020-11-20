import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

// IMPORT CHAT SCROLL
import VueChatScroll from "vue-chat-scroll";
Vue.use(VueChatScroll);

// FINAL DE CHAT SCROLL

//SWEET ALERT IMPORT
import VueSwal from "vue-swal";

Vue.use(VueSwal);
// FINAL SWEET ALERT

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBsoeLI1dwgiaa45be0Ztm_jEz4t-cuTME",
  authDomain: "proyecto-final-1-afa97.firebaseapp.com",
  databaseURL: "https://proyecto-final-1-afa97.firebaseio.com",
  projectId: "proyecto-final-1-afa97",
  storageBucket: "proyecto-final-1-afa97.appspot.com",
  messagingSenderId: "838607981920",
  appId: "1:838607981920:web:a5aa652fa277059c3f2205",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  }
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount("#app");
});

// new Vue({
//   router,
//   store,
//   vuetify,
//   render: (h) => h(App),
// }).$mount("#app");
