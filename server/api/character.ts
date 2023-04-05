import type { Character } from '../../interfaces/Character'
export default defineEventHandler(async () => {
  const characters: Character = await $fetch('http://localhost:5224/api/Character')
  return characters
})
