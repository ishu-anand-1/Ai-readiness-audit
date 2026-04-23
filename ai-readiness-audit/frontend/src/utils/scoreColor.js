export function getScoreColor(
  score
) {

  if (score >= 80)
    return "text-green-400"

  if (score >= 60)
    return "text-yellow-400"

  return "text-red-400"
}