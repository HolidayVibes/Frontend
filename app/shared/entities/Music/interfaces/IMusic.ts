import type { MusicGenres, MusicId } from "../models/index";

export interface IMusic {
  id: MusicId;
  title: string;
  author: string;
  releaseDate: number;
  description: string;
  duration: number;
  album?: string;
  imgUrl: string;
  genre: MusicGenres;
  linkToYm: string;
  createdAt: string;
  updatedAt: string;
}
