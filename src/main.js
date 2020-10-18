import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

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

// ===========AUTOMATIZACION DE COMPONENTES=====

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  // The relative path of the components folder
  "./components",
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  );
});

firebase.auth().onAuthStateChanged(function(user) {
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount("#app");
});
