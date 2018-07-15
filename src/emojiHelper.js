export const applyModifications = emojis => {
  // Remove Emoji 11.0 emojis, too new for macOS
  const emojisWithoutNewOnes = emojis.filter((emoji) => !emoji.name.includes("⊛"));
  return emojisWithoutNewOnes;
}