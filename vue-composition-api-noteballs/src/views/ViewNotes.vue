<template>
  <div class="notes">

    <AddEditNote
      v-model="newNote">
      <!-- #buttons is a shorthand to reach this slot: v-slot:buttons -->
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success">Add New Note</button>
      </template>
    </AddEditNote>

    <Note
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'

/*
  store
*/

const storeNotes = useStoreNotes()


/*
  notes
*/

const newNote = ref('')
const newNoteRef = ref(null)

const addNote = () => {
  // getting date timestamp

  storeNotes.addNote(newNote.value)

  newNote.value = ''

  newNoteRef.value.focus()
}

</script>