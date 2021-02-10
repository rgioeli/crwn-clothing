import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAH1D1SZ0RfwZ7iZzJVFaFBVLVlbakDWz0",
    authDomain: "crwn-db-279cb.firebaseapp.com",
    projectId: "crwn-db-279cb",
    storageBucket: "crwn-db-279cb.appspot.com",
    messagingSenderId: "405687406611",
    appId: "1:405687406611:web:c5023320312a55e200efe6",
    measurementId: "G-8EXZ58SLMK"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase