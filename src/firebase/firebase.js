import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { 
  getDatabase, 
  ref, 
  set, 
  onValue,
  onChildAdded,
  onChildRemoved,
  onChildChanged,
  get,
  off, 
  push, 
  child, 
  update, 
  remove,
} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Setup database
const db = getDatabase(app);

// Setup google Auth provider
export const googleAuthProvider = new GoogleAuthProvider();

export const auth = getAuth();

const signIn = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((err) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
  })
}

const LogOut = () => {
  signOut(auth).then(() => {
    console.log('Sign-out successful')
  }).catch((error) => {
    console.log('An error happened');
  });
}

export default db;


// const readExpensesData = () => {
//   const db = getDatabase();
//   // const dbRef = ref(getDatabase());
  
//   onValue(ref(db, 'expenses/'), (snapshot) => {
//     const expenses = [];

//     snapshot.forEach(child => {
//       expenses.push({
//         id: child.key,
//         ...child.val()
//       })
//     });

//     console.log(expenses);
//   }, (e) => console.log('Error with data fetching', e));

//   // unsubscibe to expenses
//   // off(ref(db, 'expenses/'));

//   // get(child(dbRef, 'expenses/'))
//   // .then((snapshot) => {
//   //   if(snapshot.exists) {
//   //     console.log(snapshot.val())
//   //   } else {
//   //     console.log('No data available')
//   //   }
//   // })
//   // .catch((e) => console.log(e))
// }

// const writeExpenseData = (expense) => {
//   const db = getDatabase();

//   return push(ref(db, 'expenses/'), {...expense})
//   .then((data) => {
//     console.log('Data is saved');
//     return data;
//   })
//   .catch((e) => console.log('This failed', e))
// }

// const getExpenseData = (expenseId) => {
//   const db = getDatabase();

//   return get(ref(db, 'expenses/' + expenseId))
//   .then((snapshot) => console.log(snapshot.val()))
//   .catch((e) => console.log(e));
// }

// const updateExpenseData = (
//   uid,
//   description,
//   note,
//   amount,
//   createAt) => {
//   const db = getDatabase();

//   // An expense entry.
//   const expenseData = {
//     description,
//     note,
//     amount,
//     createAt
//   };

//   // Update the expense's data with uid in the expenses list.
//   const updates = {};
//   updates['/expenses/' + uid] = expenseData;
//   return update(ref(db), updates)
//   .then(() => console.log(`${uid} expense is updated successfully`))
//   .catch((e) => console.log(e));
// }

// const deleteExpenseData = (expenseId) => {
//   const db = getDatabase();

//   return remove(ref(db, 'expenses/'))
//   .then(() => console.log(`${expenseId} expense is deleted successfully`))
//   .catch((e) => console.log(e));
// }

// const detectAddedExpenseData = () => {
//   const db = getDatabase();

//   onChildAdded(ref(db, 'expenses/'), (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   })
// }

// const detectUpdatedExpenseData = () => {
//   const db = getDatabase();

//   onChildChanged(ref(db, 'expenses/'), (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   })
// }

// const detectRemovedExpenseData = () => {
//   const db = getDatabase();

//   onChildRemoved(ref(db, 'expenses/'), (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   })
// }
