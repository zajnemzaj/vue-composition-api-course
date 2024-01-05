<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea
          v-model="propsHelper"
          @input="$emit('update:modelValue', propsHelper)"
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

/* 
  props
*/

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

// needed to avoid error since vue 3.2.45
// https://vuejs.org/guide/components/props.html#one-way-data-flow
// https://michaelnthiessen.com/avoid-mutating-prop-directly
const propsHelper = ref(props.modelValue)

/**
 * emits
 */

const emit = defineEmits(['update:modelValue'])
</script>