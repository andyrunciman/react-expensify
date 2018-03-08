import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase,googleAuthProvider,database as default};

// database.ref('expenses').push({
//     description:"Gas Bill",
//     note:"",
//     amount:1200,
//     createdAt:0
// });

// database.ref('expenses').push({
//     description:"Water Bill",
//     note:"",
//     amount:200,
//     createdAt:0
// });

// database.ref('expenses').push({
//     description:"Rent",
//     note:"",
//     amount:700,
//     createdAt:0
// });

// //database
// //     .ref('expenses')
// //     .once('value')
// //     .then((snapshot)=>{
// //         const data = snapshot.val();
// //         const expenses = [];
// //         for(let key of Object.keys(data)){
// //             expenses.push({
// //                 id:key,
// //                 ...data[key]
// //             })
// //         }
// //         console.log(expenses);
// // });

// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });

// database.ref('expenses').on('value',(snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// },e=>console.log(e))

