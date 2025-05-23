export async function getPodcasts() {
  return await fetch(
    import.meta.env.VITE_APP_SR_API
  )
    .then(data => data.json())
    .then(json => json)
    .catch(error => {
      console.error('nått blev fel:', error);
      return null;
    });
}

export default getPodcasts;
