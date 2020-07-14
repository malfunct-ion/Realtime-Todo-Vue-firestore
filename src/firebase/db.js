import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDMg9AnR-E8R2fGvzouEujHX2gNY_CDApA",
  authDomain: "vue-fire-todo-7483c.firebaseapp.com",
  databaseURL: "https://vue-fire-todo-7483c.firebaseio.com",
  projectId: "vue-fire-todo-7483c",
  storageBucket: "vue-fire-todo-7483c.appspot.com",
  messagingSenderId: "131767549530",
  appId: "1:131767549530:web:2a6d9c9ec08f5c9805a263",
};
// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig).firestore();
export default db;
