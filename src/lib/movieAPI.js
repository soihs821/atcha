import axios from "axios";

const key = "2fde9b04f40c72a77b3dd9f58e4da493";
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=ko&page=1&region=KR`;

export const getMovies = () => {
  let res = axios.get(`${url}`);
  return res;
};
