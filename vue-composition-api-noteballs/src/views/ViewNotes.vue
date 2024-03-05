<template>
  <div class="notes">

    <AddEditNote
      v-model="newNote"
      placeholder="Add a new note"
      ref="addEditNoteRef">
      <!-- #buttons is a shorthand to reach this slot: v-slot:buttons -->
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success">Add New Note</button>
      </template>
    </AddEditNote>

    <progress
      v-if="!storeNotes.notesLoaded"
      class="progress is-large is-success"
      max="100" />

    <template
      v-else>
      <Note
        v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note" />
      <!-- py-6 padding y size 6 -->
      <div
        v-if="!storeNotes.notes.length"
        class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6">
        No notes here yet
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { useWatchCharacters } from "@/use/useWatchCharacters"

/*
  store
*/

const storeNotes = useStoreNotes()

/*
  notes
*/

const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
  // getting date timestamp
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
}

/**
* watch characters
*/

// no second parameter, it will defualt to the given 100 in useWatchCharacters.js
useWatchCharacters(newNote)

/**
 * mounted
 */

onMounted(() => {
  storeNotes.getNotes()
})
</script>