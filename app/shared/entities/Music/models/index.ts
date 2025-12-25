export type MusicId = string;

export interface PayloadCreate {
  name: string;
  author: string;
  img: string;
  linkToYm: string;
}

export interface PayloadUpdate {
  id: MusicId;
  name?: string;
  author?: string;
  img?: string;
  linkToYm?: string;
}

export interface PayloadDelete {
  id: MusicId;
}
