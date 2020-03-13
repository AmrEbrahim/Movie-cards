export function getDuration(duration) {
  const movieTime = duration / 60;
  const hours = Math.floor(movieTime);
  const minutes = Math.round((movieTime - hours) * 60);
  if (hours === 0 && minutes === 0) {
    return null;
  } else if (minutes > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${hours}h`;
  }
}
