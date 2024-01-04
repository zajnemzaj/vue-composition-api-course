<template>
  <div class="notes">

    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success">Add New Note</button>
        </div>
      </div>

    </div>

    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'

const newNote = ref('')
const newNoteRef = ref(null)

const notes = ref([
  {
    id: 'id1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequatur soluta modi voluptatibus quidem libero repellendus quod nobis nemo qui architecto necessitatibus at nostrum, aut voluptates! Beatae rem eaque eos.'
  },
  {
    id: 'id2',
    content: 'Shorter note.'
  }
])

const addNote = () => {
  // getting date timestamp
  let currentDate = new Date().getTime(),
    id = currentDate.toString()
  let note = {
    // should be id: id, but as both are the same it can be just id
    id,
    content: newNote.value
  }
  // push puts it to the end of the arra, unshift puts it to the start of the array
  notes.value.unshift(note)

  newNote.value = ''

  newNoteRef.value.focus()
}

/*
  delete note
*/

const deleteNote = idToDelete => {
  notes.value = notes.value.filter(note => { return note.id !== idToDelete })
}
</script>