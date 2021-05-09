const apiKey = 'dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa'
//const API_URL='https://api.giphy.com/v1/gifs/search?api_key=dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa&q=panda&limit=10&offset=0&';
export default function getGifs ({keyword ='panda'} = {})  {
  
    const API_URL=`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&`;

    return fetch(API_URL)
      .then (res => res.json())
      .then(response =>{
          const {data = []} = response
          if (Array.isArray(data)){ 
            const gifs = data.map(image =>{
            const {images, title, id} = image
            const {url} = images.downsized_medium
            return {title, id, url}
            })
            return gifs
          }
      })
}