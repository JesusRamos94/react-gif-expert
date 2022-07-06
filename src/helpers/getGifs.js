export const getGifs = async (category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=W1dRkM8Evz7wUL3qLKOAY2mMjxe8ZSol&q=${category}&limit=10`
    const resp = await fetch(url)
    const {data = []} = await resp.json()

    const gifs = data.map(img => ({
    id: img.id,
    title : img.title,
    url: img.images.downsized_medium.url
    }))


    return gifs;
}