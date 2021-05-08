const API_URL='https://api.giphy.com/v1/gifs/search?api_key=dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa&q=panda&limit=10&offset=0&'

export default function getGifs ()  {
    fetch(API_URL)
    .then (res => res.json())
    .then(response =>
      {
        const {data = []} = response
        const gifs = data.map(image => image.images.downsized_medium.url)
        return gifs
      })
}