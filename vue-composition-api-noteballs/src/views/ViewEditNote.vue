<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      ref="addEditNoteRef">
      <!-- #buttons is a shorthand to reach this slot: v-slot:buttons -->
      <template #buttons>
        <button
          class="button is-link has-background-success">Save Note</button>
      </template>
    </AddEditNote>
  </div>
</template>


<script setup>

/**
 * imports
 */

import { ref } from 'vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

/**
 * note
 */

const noteContent = ref('')
</script>
