import { reactive } from "vue"

export const store = reactive<{inFocusId: string | null}>({
  inFocusId: null
})
