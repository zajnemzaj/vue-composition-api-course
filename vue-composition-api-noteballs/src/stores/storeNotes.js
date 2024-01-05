import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [
        {
          id: 'id1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequatur soluta modi voluptatibus quidem libero repellendus quod nobis nemo qui architecto necessitatibus at nostrum, aut voluptates! Beatae rem eaque eos.'
        },
        {
          id: 'id2',
          content: 'Shorter note.'
        }
      ] 
    }
  },
  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
          id = currentDate.toString()
      let note = {
      // should be id: id, but as both are the same it can be just id
        id,
        content: newNoteContent
      }
      this.notes.unshift(note)
    }
  }
})