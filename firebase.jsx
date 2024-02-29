import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {

  apiKey: "AIzaSyBFK9TBeGAkS-5-9zOS4HJog4n_EfITLKI",

  authDomain: "nostradamage-backend-01.firebaseapp.com",

  projectId: "nostradamage-backend-01",

  storageBucket: "nostradamage-backend-01.appspot.com",

  messagingSenderId: "381854619282",

  appId: "1:381854619282:web:2b2c211d9613baf52bf84b",

  databaseURL: 'https://nostradamage-backend-01-default-rtdb.europe-west1.firebasedatabase.app/', 


};
      

      const firebaseApp = initializeApp(firebaseConfig);
      const database = getDatabase(firebaseApp);

export default firebase;