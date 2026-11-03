// Measure an unchanging scroll slot, rather than the card as it expands.
// The card is closed at the bottom, fully open at centre, and closed near the top.
export function projectScrollProgress(centerY, viewportHeight) {
  if (viewportHeight <= 0) return 0;
  const position = centerY / viewportHeight;
  const entering = (1 - position) / 0.5;
  const leaving = (position - 0.1) / 0.4;
  const progress = Math.max(0, Math.min(1, entering, leaving));
  return progress * progress * (3 - 2 * progress);
}
