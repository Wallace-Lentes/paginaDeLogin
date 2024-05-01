import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDzyE6oqGgE0dCepeVPJPjDv0NvTCR1o8k",
    authDomain: "dev-web-cfb0f.firebaseapp.com",
    projectId: "dev-web-cfb0f",
    storageBucket: "dev-web-cfb0f.appspot.com",
    messagingSenderId: "1019296667205",
    appId: "1:1019296667205:web:45a04f4ca4ef2d5cbcf52c"
  };


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
};

export default firebase;