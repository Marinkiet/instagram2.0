import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//import seed files
//import {seedDatabase} from '../seed';
const config={
    apiKey: "AIzaSyBsQ5rqGY4pjJOW0mIrkSXjBAcCT4w70HE",
    authDomain: "instagram-cecf2.firebaseapp.com",
    projectId: "instagram-cecf2",
    storageBucket: "instagram-cecf2.appspot.com",
    messagingSenderId: "1078836011981",
    appId: "1:1078836011981:web:33e2fbcf5b1287065eda84"
};

const firebase = Firebase.initializeApp(config);
const{FieldValue} = Firebase.firestore; 

//call seed file(once!!!)
//seedDatabase(firebase);

console.log('firebase',firebase);
export {firebase,FieldValue};