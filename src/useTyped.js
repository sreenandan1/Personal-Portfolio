import { useEffect, useState } from 'react'

// Typewriter effect that cycles through a list of words
export default function useTyped(list) {
  const [text, setText] = useState('')
  useEffect(() => {
    let i = 0, j = 0, del = false, id
    const tick = () => {
      const w = list[i]
      j += del ? -1 : 1
      setText(w.slice(0, j))
      let d = del ? 35 : 75
      if (!del && j === w.length) { del = true; d = 1400 }
      else if (del && j === 0) { del = false; i = (i + 1) % list.length; d = 300 }
      id = setTimeout(tick, d)
    }
    tick()
    return () => clearTimeout(id)
  }, [list])
  return text
}
