import { ref, onMounted, onUnmounted } from 'vue'

export function useTypewriter(
  words: string[],
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseTime = 1800,
) {
  const text = ref('')

  let wordIndex = 0
  let charIndex = 0
  let deleting = false
  let timer: ReturnType<typeof setTimeout> | null = null

  const type = () => {
    const currentWord = words[wordIndex]

    if (!deleting) {
      text.value = currentWord.substring(0, charIndex + 1)
      charIndex++

      if (charIndex === currentWord.length) {
        deleting = true
        timer = setTimeout(type, pauseTime)
        return
      }

      timer = setTimeout(type, typingSpeed)
    } else {
      text.value = currentWord.substring(0, charIndex - 1)
      charIndex--

      if (charIndex === 0) {
        deleting = false
        wordIndex = (wordIndex + 1) % words.length

        timer = setTimeout(type, 400)
        return
      }

      timer = setTimeout(type, deletingSpeed)
    }
  }

  onMounted(() => {
    type()
  })

  onUnmounted(() => {
    if (timer) {
      clearTimeout(timer)
    }
  })

  return {
    text,
  }
}