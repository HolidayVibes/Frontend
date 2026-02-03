export type MusicId = string;
export type MusicGenres =
  | "ROCK"
  | "HIP_HOP"
  | "POP"
  | "ELECTRONIC"
  | "COUNTRY"
  | "RAP"
  | "JAZZ"
  | "CLASSICAL"
  | "ALTERNATIVE"
  | "TECHNO"
  | "METAL"
  | "K_POP"
  | "FOLK"
  | "RIFF"
  | "DECO"
  | "SOUL"
  | "BASS"
  | "INDIE_ROCK"
  | "ALT_METAL";

export interface IPayloadGetOne {
  id: MusicId;
}

export interface IPayloadCreate {
  title: string;
  author: string;
  releaseDate: number;
  description: string;
  duration: number;
  album?: string;
  genre: MusicGenres;
  linkToYm: string;
}

export interface IPayloadUpdate {
  id: MusicId;
  title?: string;
  author?: string;
  releaseDate?: number;
  description?: string;
  duration?: number;
  album?: string;
  genre?: MusicGenres;
  linkToYm?: string;
}

export interface IPayloadDelete {
  id: MusicId;
}
