import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: process.env.api_key,
  authDomain: process.env.auth_domain,
  projectId: process.env.project_id,
  storageBucket: process.env.bucket,
  messagingSenderId: process.env.msg_sender_id,
  appId: process.env.app_id,
  measurementId: process.env.measurement_id,
}

const firebaseApp = firebase.initializeApp(config)
firebase.analytics()
firebaseApp.firestore().settings({ timestampInSnapshots: true, merge: true })

export default firebaseApp.firestore()
