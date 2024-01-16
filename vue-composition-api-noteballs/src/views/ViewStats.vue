<template>
  <div class="notes">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      class="input"
      placeholder="Do you love noteballs??"
      type="text"
      v-autofocus />

  </div>
</template>

<script setup>
/**
 * imports
 */

import { useStoreNotes } from '@/stores/storeNotes'
import { vAutofocus } from "@/directives/vAutofocus";

/**
 * store
 */

const storeNotes = useStoreNotes()
</script>