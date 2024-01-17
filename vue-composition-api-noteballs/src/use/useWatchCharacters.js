import { watch } from "vue"

// maxChars get default value here if it is not given
export function useWatchCharacters(valueToWatch, maxChars = 100) {
watch(valueToWatch, (newValue) => {
  if (newValue.length === maxChars) {
    alert(`Only ${ maxChars } characters allowed gosh darnit!`)
  }
})
}