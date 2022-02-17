import { DayMonthYear, Image, JikanBasicInfo, Pagination } from "./jikanBasicTypes";

export interface Manga {
  mal_id: number,
  url: string,
  images: {
    jpg: Image,
    webp: Image,
  },
  title: string,
  title_english: string,
  title_japanese: string,
  title_synonim: Array<string>,
  type: string,
  chapters: number,
  volumes: number,
  status: string,
  publishing: boolean,
  published: {
    from: string,
    to: string,
    prop: {
      from: DayMonthYear,
      to: DayMonthYear,
      string: string,
    },
  },
  score: number,
  scored_by: number,
  rank: number,
  popularity: number,
  members: number,
  favorites: number,
  synopsis: string,
  background: string,
  authors: Array<JikanBasicInfo>,
  serializations: Array<JikanBasicInfo>,
  genres: Array<JikanBasicInfo>,
  explicit_genres: Array<JikanBasicInfo>,
  themes: Array<JikanBasicInfo>,
  demographics: Array<JikanBasicInfo>,
}

export interface MangaSearch {
  data: Array<Manga>,
  pagination: Pagination
}