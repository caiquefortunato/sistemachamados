import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

let firebaseConfig = {
	apiKey: "AIzaSyDxMWcWoOGj0hztoxW9F1MniVPKclN9aP4",
	authDomain: "sistema-13c1d.firebaseapp.com",
	projectId: "sistema-13c1d",
	storageBucket: "sistema-13c1d.appspot.com",
	messagingSenderId: "402456756744",
	appId: "1:402456756744:web:7462b172739fe04ff907bd",
	measurementId: "G-6GHYCX52DR"
};


if(!firebase.apps.length){
	firebase.initializeApp(firebaseConfig)
}

export default firebase