<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          class="textarea"
          placeholder="Add a new note"
          ref="newNoteRef" />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

// ideia is from here, since vue 3.4: 
// https://vuejs.org/guide/components/v-model.html
const modelValue = defineModel({
  type: String,
  reuqired: true
})

/**
 * emits
 */

const emit = defineEmits(['update:modelValue'])
</script>