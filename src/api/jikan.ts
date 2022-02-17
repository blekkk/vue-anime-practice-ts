import axios from 'axios';
import { Manga, MangaSearch } from '../types/jikanMangaTypes';


const fetchAnimeSeason = async (title: string): Promise<Manga[]> => {
  try {
    const result = await axios.get<MangaSearch>(`https://api.jikan.moe/v4/manga?q=${title}`);
    return result.data.data;
  } catch (error) {
    console.log(error);
    throw(error);
  }
}

export {
  fetchAnimeSeason
}