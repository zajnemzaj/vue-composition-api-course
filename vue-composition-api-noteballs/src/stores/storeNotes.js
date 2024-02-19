import { defineStore } from 'pinia'
import {
  collection, onSnapshot,
  doc, deleteDoc, updateDoc, addDoc,
  query, orderBy
} from 'firebase/firestore'
import { db } from '@/js/firebase'

const notesCollectionRef = collection(db, 'notes')
const notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'))

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
      ],
      notesLoaded: false
    }
  },
  actions: {
    async getNotes() {
      this.notesLoaded = false
      onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let notes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date
          }
          notes.push(note)
        })
        // time out 2sec before notes are loading to test progress bar
        // setTimeout(() => {
        //   this.notes = notes
        //   this.notesLoaded = true
        // }, 2000)

        this.notes = notes
        this.notesLoaded = true
      })
    },
    async addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        date = currentDate.toString()


      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date
      })

    },
    async deleteNote(idToDelete) {
      await deleteDoc(doc(notesCollectionRef, idToDelete))
    },
    async updateNote(id, content) {
      // let index = this.notes.findIndex(note => note.id === id)
      // this.notes[index].content = content

      await updateDoc(doc(notesCollectionRef, id), {
        content
      })
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