import type { MusicId } from "../models/index";

export interface IMusic {
  id: MusicId;
  name: string;
  author: string;
  img: string;
  linkToYm: string;
}
