export const removeBadEmojis = emojis => {
  const emojisWithoutNewOnes = emojis.filter((emoji) => !emoji.name.includes("⊛"));
  return emojisWithoutNewOnes;
}