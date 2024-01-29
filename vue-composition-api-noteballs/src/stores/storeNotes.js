import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, setDoc } from 'firebase/firestore'
import { db } from '@/js/firebase'

const notesCollectionRef = collection(db, 'notes')

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [
        // {
        //   id: 'id1',
        //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequatur soluta modi voluptatibus quidem libero repellendus quod nobis nemo qui architecto necessitatibus at nostrum, aut voluptates! Beatae rem eaque eos.'
        // },
        // {
        //   id: 'id2',
        //   content: 'Shorter note.'
        // }
      ] 
    }
  },
  actions: {
    async getNotes() {
      onSnapshot(notesCollectionRef, (querySnapshot) => {
        let notes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content
          }
          notes.push(note)
        })
        this.notes = notes
      })
    },
    async addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
          id = currentDate.toString()
      // let note = {
      // // should be id: id, but as both are the same it can be just id
      //   id,
      //   content: newNoteContent
      // }
      // this.notes.unshift(note)

      await setDoc(doc(notesCollectionRef, id), {
        content: newNoteContent

      });

    },
    deleteNote(idToDelete) {
      // passing the notes and filtering out only the ones which are not the got 'id' as parameter and giving the result back to it sor overwriting the store's values
      // shorthand for 
      // return { note.id !== idToDelet }
      this.notes = this.notes.filter(note => note.id !== idToDelete)
    },
    updateNote(id, content) {
      let index = this.notes.findIndex(note => note.id === id)
      this.notes[index].content = content
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note => note.id === id)[0].content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0
      state.notes.forEach(note => {
        count += note.content.length
      })
      return count
    }
  }
})