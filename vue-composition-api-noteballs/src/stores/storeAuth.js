import { defineStore } from 'pinia'
import { signOut, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/js/firebase'

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {

    }
  },
  actions: {
    registerUser(credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user
        }).catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log('error.message: ', error.message)
        })
    },
    logoutUser() {
      signOut(auth).then(() => {
        console.log('User signed out')
      }).catch((error) => {
        console.log(error.message)
      })
    }
  }
})