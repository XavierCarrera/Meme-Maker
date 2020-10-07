import Vue from 'vue'
import App from './App.vue'
import {firestorePlugin} from 'vuefire'  
import *as firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/storage'
import router from './router/index'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBozokh9jOaUcLjhlPKo6QpMM5Xm-NFW58",
  authDomain: "meme-maker-49f58.firebaseapp.com",
  databaseURL: "https://meme-maker-49f58.firebaseio.com",
  projectId: "meme-maker-49f58",
  storageBucket: "meme-maker-49f58.appspot.com",
  messagingSenderId: "365325207941",
  appId: "1:365325207941:web:7c8c39a9018b370188dcec",
  measurementId: "G-9WSS60DTFK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const firestore = firebaseApp.firestore()
export const storage = firebase.storage().ref('/images')

Vue.use(firestorePlugin)


new Vue({
  vuetify,
  render: h => h(App),
  router,
  components: {App} 
}).$mount('#app')