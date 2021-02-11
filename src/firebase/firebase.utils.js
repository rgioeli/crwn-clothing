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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    
    // userRef is checking our users collection to see if login attempt id exits
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exits) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(err) {
            console.log('error creating user', err.message)
        }
    }
    
    return userRef
}

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase