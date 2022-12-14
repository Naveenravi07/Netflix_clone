console.log(process.env);
 export let api_key=process.env.REACT_APP_API_KEY

export const baseUrl = 'https://api.themoviedb.org/3';
export const imageUrl = "https://image.tmdb.org/t/p/original/"
export const netflixoriginals = `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
export const API_KEY = api_key
export const actionurl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`
export const dramaurl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=18`
export const horrorurl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=80`
