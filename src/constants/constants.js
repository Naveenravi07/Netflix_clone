let { api_key } = require('./config.json')

export const baseUrl = 'https://api.themoviedb.org/3';
export const imageUrl = "https://image.tmdb.org/t/p/w500/"
export const netflixoriginals = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_networks=213`
export const API_KEY = api_key
export const actionurl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`
export const dramaurl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=18`
export const horrorurl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27`
