<template>
  <div
    class="card p-4 mb-5"
    :class="`has-background-${bgColor}-dark`">

    <label
      v-if="label"
      class="label has-text-white">{{ label }}</label>

    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          class="textarea"
          :placeholder="placeholder"
          ref="textareaRef" />
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

/**
 * imports
 */

import { ref } from 'vue'

/**
 * model defining instead of props
 */

// ideia is from here, since vue 3.4: 
// https://vuejs.org/guide/components/v-model.html
const modelValue = defineModel({
  type: String,
  reuqired: true
})

/**
 * props
 */

const props = defineProps({
  bgColor: {
    type: String,
    default: 'success'
  },
  placeholder: {
    type: String,
    default: 'Type something...'
  },
  label: {
    type: String
  }
})

/**
 * emits
 */

const emit = defineEmits(['update:modelValue'])

/**
 * focus textarea
 */

const textareaRef = ref(null)

const focusTextarea = () => {
  textareaRef.value.focus()
}

// needed to expose the function to be found
defineExpose({
  focusTextarea
})
</script>