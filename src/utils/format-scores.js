export default function formatScores(scores) {
  return Number(Math.round(scores + 'e' + 2) + 'e-' + 2).toFixed(2);
}
