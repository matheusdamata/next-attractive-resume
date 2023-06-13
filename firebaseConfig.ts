import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCAxfA-yWHEEIDCtQpm8FFjgdRIn2SdlvI',
  authDomain: 'henrique-valadao.firebaseapp.com',
  projectId: 'henrique-valadao',
  storageBucket: 'henrique-valadao.appspot.com',
  messagingSenderId: '466860143830',
  appId: '1:466860143830:web:a7ae4426ada602cca74577',
  measurementId: 'G-XEZ5KCFP3D',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
